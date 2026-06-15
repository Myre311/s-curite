"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, PhoneCall, Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-or/15 bg-noir/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-2 sm:gap-6">
        <BrandMark />

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className="flex items-center gap-1 text-sm tracking-wide text-blanc/80 transition-colors hover:text-or"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-xl border border-or/25 bg-[#141418] p-2 shadow-2xl shadow-black/70 ring-1 ring-black/60">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-or/15"
                      >
                        <span className="block text-sm font-medium text-blanc">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-blanc/65">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-or",
                  pathname === item.href ? "text-or" : "text-blanc/80",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_22px_rgba(220,38,38,0.35)] transition-colors hover:bg-red-700"
            aria-label="Appeler — urgence 24/7"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="whitespace-nowrap">Urgence 24/7</span>
          </a>
          <Button href="/contact" size="sm">
            Demande de devis
          </Button>
        </div>

        {/* Actions mobile : appel direct + menu hamburger */}
        <div className="flex shrink-0 items-center gap-2.5 lg:hidden">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_22px_rgba(220,38,38,0.45)] transition-colors hover:bg-red-700 active:scale-95"
            aria-label="Appeler — urgence 24/7"
          >
            <PhoneCall className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">Urgence 24/7</span>
          </a>
          <button
            type="button"
            className="text-blanc"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-or/15 bg-noir lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-or">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMenu}
                      className="block rounded-md py-2.5 pl-3 text-blanc/85 transition-colors hover:text-or"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={closeMenu}
                  className="rounded-md py-2.5 text-blanc/85 transition-colors hover:text-or"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-4 flex flex-col gap-3 border-t border-or/15 pt-5">
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="flex items-center gap-2 text-blanc/85"
              >
                <Phone className="h-4 w-4 text-or" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <Button href="/contact" className="w-full">
                Demande de devis confidentielle
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
