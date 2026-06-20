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
 * Photo affichée sans filtre ni dégradé.
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
    </Reveal>
  );
}
