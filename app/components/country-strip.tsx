type CountryStripProps = {
  className?: string;
  size?: "sm" | "md";
};

export function CountryStrip({ className = "", size = "md" }: CountryStripProps) {
  const h = size === "sm" ? "h-1" : "h-1.5";
  return (
    <div
      className={`flex w-full overflow-hidden rounded-full ${h} ${className}`}
      aria-hidden
    >
      <span className="h-full flex-1 bg-[#21468B]" title="Holandia" />
      <span className="h-full flex-1 bg-[#AE1C28]" />
      <span className="h-full flex-1 bg-white" />
      <span className="h-full flex-1 bg-[#EF3340]" title="Belgia" />
      <span className="h-full flex-1 bg-[#FDDA24]" />
      <span className="h-full flex-1 bg-black" />
      <span className="h-full flex-1 bg-white" title="Polska" />
      <span className="h-full flex-1 bg-[#DC143C]" />
    </div>
  );
}
