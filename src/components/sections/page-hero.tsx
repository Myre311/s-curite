import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** En-tête standard des pages intérieures. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-or/10 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_90%_at_15%_-10%,rgba(197,162,83,0.14),transparent_60%)]"
      />
      <div aria-hidden className="gold-rule absolute inset-x-0 top-0" />
      <Container className="relative">
        <Reveal>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-medium leading-[1.08] text-blanc sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-blanc/70">
              {intro}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
