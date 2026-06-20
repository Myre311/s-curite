import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

type PhotoBandProps = {
  src: string;
  alt: string;
  /** Cadrage vertical de la photo (classe object-position Tailwind). */
  position?: string;
};

/**
 * Bande visuelle cinématique pleine largeur, insérée entre deux sections.
 * Léger dégradé vers le noir en haut/bas pour fusionner avec les sections sombres.
 */
export function PhotoBand({
  src,
  alt,
  position = "object-center",
}: PhotoBandProps) {
  return (
    <Reveal
      as="section"
      y={0}
      className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-[440px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${position}`}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/5 to-noir/70"
      />
    </Reveal>
  );
}
