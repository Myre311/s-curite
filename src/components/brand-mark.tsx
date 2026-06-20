import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Marque : emblème officiel (écusson doré) + wordmark.
 *
 * Emblème : /public/brand/emblem.jpg (détouré depuis le logo fourni).
 * Si une version vectorielle/transparente (SVG/PNG) est fournie plus tard,
 * remplacer simplement le fichier en gardant le même nom.
 */
export function BrandMark({
  className,
  size = "md",
  hideWordmarkOnMobile = false,
}: {
  className?: string;
  size?: "sm" | "md";
  /** Masque le texte sur petits écrans (libère de la place dans le header). */
  hideWordmarkOnMobile?: boolean;
}) {
  const emblem = size === "md" ? 40 : 32;
  return (
    <Link
      href="/"
      aria-label="Global Secure & Transport, Accueil"
      className={cn("group inline-flex min-w-0 items-center gap-2.5", className)}
    >
      <Image
        src="/brand/emblem.jpg"
        alt="Global Secure & Transport"
        width={emblem}
        height={emblem}
        priority
        className="shrink-0 rounded-md shadow-[0_0_18px_rgba(198,160,74,0.18)]"
      />
      <span
        className={cn(
          "min-w-0 flex-col leading-none",
          hideWordmarkOnMobile ? "hidden sm:flex" : "inline-flex",
        )}
      >
        <span
          className={cn(
            "truncate font-serif font-medium tracking-tight text-gold-gradient",
            size === "md" ? "text-sm sm:text-xl" : "text-base",
          )}
        >
          GLOBAL SECURE
        </span>
        <span
          className={cn(
            "font-serif tracking-[0.22em] text-blanc/85",
            size === "md" ? "text-[0.7rem] sm:text-xs" : "text-[0.62rem]",
          )}
        >
          &amp; TRANSPORT
        </span>
      </span>
    </Link>
  );
}
