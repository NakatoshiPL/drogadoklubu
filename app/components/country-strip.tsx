type CountryStripProps = {
  className?: string;
  size?: "sm" | "md";
};

export function CountryStrip({ className = "", size = "md" }: CountryStripProps) {
  const h = size === "sm" ? "h-0.5" : "h-1";
  return (
    <div
      className={`flex w-full overflow-hidden ${h} ${className}`}
      aria-hidden
    >
      <span className="h-full flex-[2] bg-[var(--nl)]" title="Holandia" />
      <span className="h-full flex-[2] bg-[var(--be)]" title="Belgia" />
      <span className="h-full flex-[2] bg-[var(--pl)]" title="Polska" />
    </div>
  );
}
