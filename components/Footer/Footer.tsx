import { ArrowDownToLine } from "lucide-react";

import { Container } from "@/components/Container/Container";
import { contactLinks, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col justify-between gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          className="w-fit transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Abrir Instagram de Reynaldo Figuera"
        >
          {profile.brand}
        </a>
        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            download
            className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-white/[.06] hover:text-foreground"
            aria-label="Descargar CV"
          >
            <ArrowDownToLine className="size-4" aria-hidden="true" />
          </a>
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const isTodo = link.href === "TODO";
            const isExternal = link.href.startsWith("http");

            return isTodo ? (
              <span
                key={link.label}
                className="flex size-9 items-center justify-center rounded-full border border-border opacity-45"
                aria-label={`${link.label} pendiente`}
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-white/[.06] hover:text-foreground"
                aria-label={link.label}
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
