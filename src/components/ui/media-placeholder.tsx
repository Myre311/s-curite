import { cn } from "@/lib/utils";

/**
 * Bloc visuel placeholder premium (dégradé noir→doré + lignes fines).
 *
 * >>> À REMPLACER PAR LE CLIENT <<<
 * Lorsque les vraies photos seront fournies, remplacer ce composant par un
 * <Image> Next.js :
 *
 *   import Image from "next/image";
 *   <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio }}>
 *     <Image src="/photos/xxx.jpg" alt="..." fill className="object-cover" />
 *   </div>
 */
export function MediaPlaceholder({
  className,
  aspectRatio = "4 / 3",
  label,
  variant = "default",
}: {
  className?: string;
  aspectRatio?: string;
  /** Légende discrète indiquant l'emplacement de la future photo. */
  label?: string;
  variant?: "default" | "tall" | "wide";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-or/15 bg-noir-soft",
        className,
      )}
      style={{ aspectRatio }}
      role="img"
      aria-label={label ?? "Visuel illustratif (à fournir par le client)"}
    >
      {/* Dégradé de fond */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,rgba(197,162,83,0.18),transparent_55%),linear-gradient(160deg,#17171a,#0a0a0b)]" />
      {/* Lignes géométriques fines dorées */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5a253" stopOpacity="0" />
            <stop offset="50%" stopColor="#e2c987" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c5a253" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="20%"
          stroke="url(#goldline)"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="95%"
          x2="100%"
          y2="40%"
          stroke="url(#goldline)"
          strokeWidth="0.5"
        />
      </svg>
      {/* Monogramme discret */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-5xl tracking-tight text-or/20 select-none">
          GS&T
        </span>
      </div>
      {label ? (
        <span className="absolute bottom-3 left-3 rounded bg-noir/70 px-2 py-1 text-[10px] uppercase tracking-widest text-blanc/45">
          {label}
        </span>
      ) : null}
      {variant === "tall" || variant === "wide" ? null : null}
    </div>
  );
}
