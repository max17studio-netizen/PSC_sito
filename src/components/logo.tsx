import { cn } from "@/lib/utils";

function BrandSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 400"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Left roof / mountain */}
      <path d="M108 176 L236 64 L364 176 L326 176 L236 102 L146 176 Z" />
      {/* Right roof / mountain — drawn on top */}
      <path d="M304 182 L452 46 L600 182 L554 182 L452 94 L350 182 Z" />
      {/* Oval swoosh, tapered at both tips */}
      <path d="M90 140 C28 178 32 328 298 350 C528 370 676 302 680 194 C674 188 662 194 656 206 C646 288 508 342 298 326 C88 306 68 198 120 158 C110 150 100 144 90 140 Z" />
      <text
        x="350"
        y="248"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Libre Baskerville, Georgia, Times New Roman, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="58"
      >
        P.S.C. srl
      </text>
      <text
        x="350"
        y="302"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Libre Baskerville, Georgia, Times New Roman, serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="38"
      >
        edilizia moderna
      </text>
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
  size = "header",
}: {
  className?: string;
  inverted?: boolean;
  size?: "header" | "footer";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        inverted ? "text-ink-fg" : "text-primary",
        className,
      )}
    >
      <BrandSvg
        className={cn(
          "w-auto",
          size === "footer" ? "h-16 md:h-20" : "h-12 md:h-14",
        )}
      />
      <span className="sr-only">P.S.C. Edilizia Moderna</span>
    </span>
  );
}
