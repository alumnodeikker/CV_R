from __future__ import annotations

import math
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
PORTRAIT_PNG = PUBLIC / "images" / "profile" / "cruz-reinaldo.png"
PORTRAIT_JPG = PUBLIC / "images" / "profile" / "cv-portrait.jpg"
OUTPUT = PUBLIC / "cv-cruz-reynaldo-figuera-arias.pdf"

PAGE_W = 595.28
PAGE_H = 841.89
MARGIN = 36


def ensure_portrait() -> tuple[int, int]:
    subprocess.run(
        [
            "sips",
            "-s",
            "format",
            "jpeg",
            "-s",
            "formatOptions",
            "88",
            str(PORTRAIT_PNG),
            "--out",
            str(PORTRAIT_JPG),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    result = subprocess.run(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(PORTRAIT_JPG)],
        check=True,
        text=True,
        capture_output=True,
    )
    width = height = 0
    for line in result.stdout.splitlines():
        if "pixelWidth:" in line:
            width = int(line.rsplit(":", 1)[1].strip())
        if "pixelHeight:" in line:
            height = int(line.rsplit(":", 1)[1].strip())
    return width, height


def pdf_text(value: str) -> str:
    raw = value.encode("cp1252", errors="replace")
    escaped = bytearray()
    for byte in raw:
        if byte in (40, 41, 92):
            escaped.extend((92, byte))
        elif byte in (10, 13):
            escaped.append(32)
        else:
            escaped.append(byte)
    return escaped.decode("latin1")


class Pdf:
    def __init__(self) -> None:
        self.objects: list[bytes] = []
        self.ops: list[str] = []

    def add_object(self, body: bytes | str) -> int:
        if isinstance(body, str):
            body = body.encode("latin1")
        self.objects.append(body)
        return len(self.objects)

    def op(self, value: str) -> None:
        self.ops.append(value)

    def rect(self, x: float, y: float, w: float, h: float, fill: tuple[float, float, float]) -> None:
        r, g, b = fill
        self.op(f"{r:.3f} {g:.3f} {b:.3f} rg {x:.2f} {y:.2f} {w:.2f} {h:.2f} re f")

    def line(self, x1: float, y1: float, x2: float, y2: float, color: tuple[float, float, float], width: float = 0.8) -> None:
        r, g, b = color
        self.op(f"{r:.3f} {g:.3f} {b:.3f} RG {width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def text(
        self,
        value: str,
        x: float,
        y: float,
        size: float = 10,
        font: str = "F1",
        color: tuple[float, float, float] = (0.12, 0.12, 0.14),
        char_space: float = 0,
    ) -> None:
        r, g, b = color
        self.op(
            f"BT {r:.3f} {g:.3f} {b:.3f} rg /{font} {size:.2f} Tf {char_space:.2f} Tc "
            f"1 0 0 1 {x:.2f} {y:.2f} Tm ({pdf_text(value)}) Tj ET"
        )

    def wrapped(
        self,
        value: str,
        x: float,
        y: float,
        width: float,
        size: float = 9,
        leading: float = 12,
        font: str = "F1",
        color: tuple[float, float, float] = (0.30, 0.31, 0.36),
        max_lines: int | None = None,
    ) -> float:
        words = value.split()
        lines: list[str] = []
        line = ""
        avg = size * 0.48
        max_chars = max(8, math.floor(width / avg))
        for word in words:
            candidate = word if not line else f"{line} {word}"
            if len(candidate) <= max_chars:
                line = candidate
            else:
                lines.append(line)
                line = word
        if line:
            lines.append(line)
        if max_lines:
            lines = lines[:max_lines]
        cursor = y
        for item in lines:
            self.text(item, x, cursor, size=size, font=font, color=color)
            cursor -= leading
        return cursor

    def bullet_list(self, items: list[str], x: float, y: float, width: float, size: float = 8.2, leading: float = 11.5) -> float:
        cursor = y
        for item in items:
            self.text("•", x, cursor, size=size + 1, font="F2", color=(0.13, 0.39, 0.92))
            cursor = self.wrapped(item, x + 10, cursor, width - 10, size=size, leading=leading, max_lines=2)
            cursor -= 2
        return cursor

    def heading(self, value: str, x: float, y: float) -> None:
        self.text(value.upper(), x, y, size=8, font="F2", color=(0.13, 0.39, 0.92), char_space=1.1)
        self.line(x, y - 5, x + 235, y - 5, (0.87, 0.89, 0.93), 0.7)

    def save(self, image_size: tuple[int, int]) -> None:
        content = "\n".join(self.ops).encode("latin1")
        stream_id = self.add_object(f"<< /Length {len(content)} >>\nstream\n".encode("latin1") + content + b"\nendstream")

        image_bytes = PORTRAIT_JPG.read_bytes()
        img_w, img_h = image_size
        image_id = self.add_object(
            f"<< /Type /XObject /Subtype /Image /Width {img_w} /Height {img_h} "
            f"/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length {len(image_bytes)} >>\nstream\n".encode("latin1")
            + image_bytes
            + b"\nendstream"
        )
        f1_id = self.add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
        f2_id = self.add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
        f3_id = self.add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>")
        page_id = len(self.objects) + 1
        pages_id = len(self.objects) + 2
        resources = (
            f"<< /Font << /F1 {f1_id} 0 R /F2 {f2_id} 0 R /F3 {f3_id} 0 R >> "
            f"/XObject << /Portrait {image_id} 0 R >> >>"
        )
        self.add_object(
            f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {PAGE_W:.2f} {PAGE_H:.2f}] "
            f"/Resources {resources} /Contents {stream_id} 0 R >>"
        )
        self.add_object(f"<< /Type /Pages /Kids [{page_id} 0 R] /Count 1 >>")
        catalog_id = self.add_object(f"<< /Type /Catalog /Pages {pages_id} 0 R >>")

        parts = [b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"]
        offsets: list[int] = []
        for index, body in enumerate(self.objects, start=1):
            offsets.append(sum(len(part) for part in parts))
            parts.append(f"{index} 0 obj\n".encode("latin1") + body + b"\nendobj\n")
        xref_offset = sum(len(part) for part in parts)
        xref = [f"xref\n0 {len(self.objects) + 1}\n0000000000 65535 f \n".encode("latin1")]
        for offset in offsets:
            xref.append(f"{offset:010d} 00000 n \n".encode("latin1"))
        trailer = f"trailer\n<< /Size {len(self.objects) + 1} /Root {catalog_id} 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode("latin1")
        OUTPUT.write_bytes(b"".join(parts + xref + [trailer]))


def build_cv() -> None:
    img_size = ensure_portrait()
    pdf = Pdf()
    blue = (0.13, 0.39, 0.92)
    cyan = (0.02, 0.62, 0.75)
    dark = (0.08, 0.08, 0.10)
    muted = (0.34, 0.35, 0.40)

    pdf.rect(0, 0, PAGE_W, PAGE_H, (0.985, 0.986, 0.99))
    pdf.rect(0, PAGE_H - 146, PAGE_W, 146, (0.035, 0.035, 0.045))
    pdf.rect(0, PAGE_H - 146, PAGE_W, 5, blue)
    pdf.op("q 88 0 0 118 471 695 cm /Portrait Do Q")
    pdf.op("0.000 0.000 0.000 rg 468 692 96 124 re S")

    pdf.text("CRUZ REYNALDO", MARGIN, 775, size=25, font="F2", color=(1, 1, 1), char_space=0.3)
    pdf.text("FIGUERA ARIAS", MARGIN, 748, size=25, font="F2", color=(0.80, 0.95, 1), char_space=0.3)
    pdf.text("Desarrollador de Aplicaciones Web · Frontend & Full Stack Developer", MARGIN, 722, size=10.8, font="F2", color=(0.86, 0.88, 0.92))
    pdf.text("España · 611663753 · figuerareynaldo@gmail.com", MARGIN, 702, size=9.2, color=(0.76, 0.78, 0.84))
    pdf.text("linkedin.com/in/reynaldo-figuera · instagram.com/reyfiguera", MARGIN, 687, size=9.2, color=(0.76, 0.78, 0.84))

    left_x = MARGIN
    right_x = 344
    left_w = 272
    right_w = 215
    y = 650

    pdf.heading("Perfil profesional", left_x, y)
    y = pdf.wrapped(
        "Desarrollador de aplicaciones web con formación especializada en tecnologías web. Combino diseño, rendimiento, accesibilidad y buenas prácticas para construir aplicaciones modernas, rápidas, escalables y centradas en la experiencia del usuario.",
        left_x,
        y - 20,
        left_w,
        size=9.2,
        leading=12.5,
        color=muted,
    )
    y -= 14

    pdf.heading("Experiencia", left_x, y)
    y -= 19
    pdf.text("Productor Audiovisual & Desarrollador Web Freelance", left_x, y, size=9.6, font="F2", color=dark)
    pdf.text("2008 - 2018 · Venezuela", left_x, y - 13, size=8.4, font="F3", color=blue)
    y = pdf.bullet_list(
        [
            "Más de 20 años en proyectos digitales y audiovisuales para empresas e instituciones de Latinoamérica.",
            "Desarrollo de sitios web corporativos con WordPress y gestión de contenido digital.",
            "Producción audiovisual para cine, televisión y comunicación institucional.",
            "Gestión integral de proyectos digitales desde planificación hasta entrega.",
        ],
        left_x,
        y - 30,
        left_w,
    )
    y -= 10
    pdf.text("Especialización en Desarrollo de Aplicaciones Web", left_x, y, size=9.6, font="F2", color=dark)
    pdf.text("2025 - Actualidad", left_x, y - 13, size=8.4, font="F3", color=blue)
    y = pdf.bullet_list(
        [
            "Evolución profesional hacia aplicaciones web modernas con tecnologías Frontend y Backend.",
            "Enfoque actual en arquitectura de software, UX, bases de datos SQL y APIs REST.",
        ],
        left_x,
        y - 30,
        left_w,
    )

    y = 650
    pdf.heading("Stack técnico", right_x, y)
    y = pdf.wrapped(
        "HTML5 · CSS3 · JavaScript · React · Next.js · TypeScript · SQL · REST API · MVC · POO · Git · Accesibilidad · Testing · Cloud · HTTP · TCP/IP",
        right_x,
        y - 20,
        right_w,
        size=8.8,
        leading=12,
        color=dark,
    )
    y -= 16

    pdf.heading("Proyectos", right_x, y)
    y -= 20
    pdf.text("FLEX", right_x, y, size=10.5, font="F2", color=dark)
    y = pdf.wrapped(
        "Plataforma web para digitalizar la gestión de bares y restaurantes: cartas digitales, reservas, salas, clientes, responsive y UX.",
        right_x,
        y - 14,
        right_w,
        size=8.4,
        leading=11.5,
        color=muted,
    )
    y -= 8
    pdf.text("Amazon Warehouse Training", right_x, y, size=10.5, font="F2", color=dark)
    y = pdf.wrapped(
        "Aplicación web formativa para explicar visualmente procesos logísticos mediante una experiencia interactiva y responsive.",
        right_x,
        y - 14,
        right_w,
        size=8.4,
        leading=11.5,
        color=muted,
    )
    y -= 16

    pdf.heading("Formación", right_x, y)
    y = pdf.wrapped(
        "Desarrollo de Aplicaciones con Tecnologías Web. Formación en diseño, desarrollo, implementación y despliegue de aplicaciones web escalables, seguras y centradas en el usuario.",
        right_x,
        y - 20,
        right_w,
        size=8.4,
        leading=11.7,
        color=muted,
    )
    y -= 16

    pdf.heading("Competencias", right_x, y)
    y = pdf.bullet_list(
        [
            "Resolución de problemas",
            "Aprendizaje continuo",
            "Trabajo en equipo",
            "Pensamiento analítico",
            "Comunicación",
            "Adaptabilidad",
            "Orientación al detalle",
            "Buenas prácticas",
        ],
        right_x,
        y - 20,
        right_w,
        size=8.3,
        leading=10.5,
    )

    pdf.line(MARGIN, 48, PAGE_W - MARGIN, 48, (0.87, 0.89, 0.93), 0.7)
    pdf.text("@reyfiguera", MARGIN, 30, size=8.6, font="F2", color=blue)
    pdf.text("CV profesional generado desde cruzreinaldo.com", PAGE_W - 222, 30, size=8.2, color=(0.48, 0.49, 0.54))
    pdf.save(img_size)


if __name__ == "__main__":
    build_cv()
