import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-coral) text-(--color-bg-light) hover:bg-(--color-coral-deep)",
  secondary:
    "bg-(--color-carbon-deep) text-(--color-bg-light) hover:bg-(--color-carbon)",
  ghost:
    "bg-transparent text-(--color-coral-deep) border border-(--color-coral-edge) hover:border-(--color-coral)",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  // Se acepta tanto botón como link (<a>) como origen del evento, ya que el
  // componente se renderiza como uno u otro según reciba `href`.
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Omit<ComponentPropsWithoutRef<"button">, "onClick">;

/** Botón de marca con tres variantes. Se renderiza como `<Link>` si recibe `href`. */
export function Button({
  variant = "primary",
  href,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-(--radius-pill) px-6 py-3 text-sm font-semibold transition-colors duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
