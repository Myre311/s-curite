import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SegmentHighlights } from "@/components/sections/segment-highlights";
import { CtaBand } from "@/components/sections/cta-band";
import { professionnels } from "@/content/segments";

export const metadata: Metadata = {
  title: "Professionnels",
  description: professionnels.intro,
};

export default function ProfessionnelsPage() {
  return (
    <>
      <PageHero
        eyebrow={professionnels.eyebrow}
        title={professionnels.title}
        intro={professionnels.intro}
      />
      <SegmentHighlights
        highlights={professionnels.highlights}
        reassurance={professionnels.reassurance}
      />
      <CtaBand
        title="Protégeons vos dirigeants, vos intérêts et vos actifs."
        ctaLabel="Demande de devis confidentielle"
      />
    </>
  );
}
