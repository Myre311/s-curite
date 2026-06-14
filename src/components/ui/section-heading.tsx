import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-or",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-or/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  centered,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        {eyebrow ? (
          <div className={cn(centered && "flex justify-center")}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        ) : null}
        <h2 className="mt-5 text-balance text-3xl font-medium leading-tight text-blanc sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {body ? (
          <p className="mt-5 text-pretty text-base leading-relaxed text-blanc/70">
            {body}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}
