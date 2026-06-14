import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SegmentHighlight } from "@/content/segments";

export function SegmentHighlights({
  highlights,
  reassurance,
}: {
  highlights: SegmentHighlight[];
  reassurance: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <Link
                href={h.href}
                className="group flex h-full flex-col justify-between rounded-lg border border-or/15 bg-noir-soft p-7 transition-all duration-300 hover:border-or/40 hover:bg-noir-elevated"
              >
                <div>
                  <h2 className="text-xl font-medium text-blanc">{h.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-blanc/65">
                    {h.body}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-or">
                  Découvrir
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex items-start gap-4 rounded-lg border border-or/15 bg-noir-soft p-6">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-or" />
            <p className="text-sm leading-relaxed text-blanc/75">
              {reassurance}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
