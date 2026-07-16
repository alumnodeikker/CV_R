"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/constants/site";
import { useScrollState } from "@/hooks/use-scroll-state";
import { cn } from "@/lib/utils";

export function Navbar() {
  const hasScrolled = useScrollState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        hasScrolled && "border-border bg-background/72 shadow-soft backdrop-blur-xl"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-foreground">
          {siteConfig.brand}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[.04] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          aria-label={isOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </Button>
      </nav>
      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background/90 px-5 py-4 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/[.04] hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
