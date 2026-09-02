import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4">{eyebrow}</span>
        </Reveal>
      )}
      <h2 className="text-(length:--text-display) leading-(--text-display--line-height) font-semibold tracking-tight text-(--color-carbon-deep)">
        <SplitReveal delay={0.1}>{title}</SplitReveal>
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-base text-(--color-text-secondary) sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
