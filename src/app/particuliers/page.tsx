import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SegmentHighlights } from "@/components/sections/segment-highlights";
import { CtaBand } from "@/components/sections/cta-band";
import { particuliers } from "@/content/segments";

export const metadata: Metadata = {
  title: "Particuliers",
  description: particuliers.intro,
};

export default function ParticuliersPage() {
  return (
    <>
      <PageHero
        eyebrow={particuliers.eyebrow}
        title={particuliers.title}
        intro={particuliers.intro}
      />
      <SegmentHighlights
        highlights={particuliers.highlights}
        reassurance={particuliers.reassurance}
      />
      <CtaBand
        title="Une protection sur mesure pour ceux qui vous sont chers."
        ctaLabel="Demande de devis confidentielle"
      />
    </>
  );
}
