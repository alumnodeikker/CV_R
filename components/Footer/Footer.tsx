import { Container } from "@/components/Container/Container";
import { siteConfig, socialLinks } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col justify-between gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>{siteConfig.brand}</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
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
