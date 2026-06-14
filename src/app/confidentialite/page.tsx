import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { legalSections, legalPage } from "@/content/legal";

export const metadata: Metadata = {
  title: "Confidentialité & Mentions légales",
  description: legalPage.intro,
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow={legalPage.eyebrow}
        title={legalPage.title}
        intro={legalPage.intro}
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          {/* Sommaire */}
          <Reveal>
            <nav
              aria-label="Sommaire"
              className="mb-14 rounded-lg border border-or/15 bg-noir-soft p-6"
            >
              <h2 className="text-xs uppercase tracking-[0.2em] text-or">
                Sommaire
              </h2>
              <ul className="mt-4 space-y-2">
                {legalSections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-blanc/70 transition-colors hover:text-or"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <div className="space-y-14">
            {legalSections.map((section) => (
              <Reveal key={section.id}>
                <article id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-medium text-blanc">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="leading-relaxed text-blanc/70">
                        {p}
                      </p>
                    ))}
                    {section.items ? (
                      <ul className="mt-2 space-y-2.5">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-blanc/70"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-or"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 border-t border-or/10 pt-6 text-xs leading-relaxed text-blanc/40">
              {legalPage.disclaimer}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
