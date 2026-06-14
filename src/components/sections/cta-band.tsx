import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand({
  title,
  body,
  ctaLabel,
  ctaHref = "/contact",
}: {
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-or/15 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(197,162,83,0.12),transparent_70%)]"
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-tight text-blanc sm:text-4xl">
            {title}
          </h2>
          {body ? (
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-blanc/70">
              {body}
            </p>
          ) : null}
          <div className="mt-9 flex justify-center">
            <Button href={ctaHref} size="lg">
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
