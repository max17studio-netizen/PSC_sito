import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        inverted ? "text-ink-fg" : "text-fg",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        className="size-9 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" className="fill-bg" />
        <rect x="5" y="8" width="22" height="3" className="fill-fg" />
        <rect x="7" y="11" width="18" height="15" className="fill-primary" />
        <rect x="10" y="14" width="4" height="4" className="fill-surface" />
        <rect x="18" y="14" width="4" height="4" className="fill-surface" />
        <rect x="10" y="20" width="4" height="4" className="fill-surface" />
        <rect x="18" y="20" width="4" height="4" className="fill-surface" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-semibold tracking-[0.18em]">
          P.S.C.
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium tracking-[0.22em] uppercase",
            inverted ? "text-ink-fg/70" : "text-muted",
          )}
        >
          Edilizia Moderna
        </span>
      </span>
    </span>
  );
}
