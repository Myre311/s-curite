import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // CTA principal doré
        gold: "bg-or text-noir hover:bg-or-clair hover:shadow-[0_8px_30px_-8px_rgba(197,162,83,0.5)]",
        // Contour doré sur fond noir
        outline: "border border-or/60 text-or hover:border-or hover:bg-or/10",
        // Discret
        ghost: "text-blanc/80 hover:text-or",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type StyleProps = VariantProps<typeof buttonVariants>;

type ButtonAsButton = StyleProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
    href?: undefined;
  };

type ButtonAsLink = StyleProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    if (isExternal) {
      return <a href={href} className={classes} {...rest} />;
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}

export { buttonVariants };
