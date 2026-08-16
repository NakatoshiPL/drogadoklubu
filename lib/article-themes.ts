export type ArticleTheme = "default" | "nl" | "be" | "pl" | "guide";

export const articleThemes: Record<
  ArticleTheme,
  {
    label: string;
    accent: string;
    accentSoft: string;
    gradient: string;
    border: string;
    badge: string;
    chip: string;
    toc: string;
  }
> = {
  default: {
    label: "Poradnik",
    accent: "#0f2a3d",
    accentSoft: "#eef2f5",
    gradient: "from-[#0f2a3d] to-[#355070]",
    border: "border-l-[#0f2a3d]",
    badge: "bg-slate-100 text-slate-800 ring-slate-300",
    chip: "border-slate-200 bg-slate-50 text-slate-800",
    toc: "hover:text-[#0f2a3d]",
  },
  nl: {
    label: "Holandia · KNVB",
    accent: "#355070",
    accentSoft: "#eef2f6",
    gradient: "from-[#355070] to-[#0f2a3d]",
    border: "border-l-[#355070]",
    badge: "bg-slate-100 text-[#355070] ring-slate-300",
    chip: "border-slate-200 bg-slate-50 text-[#355070]",
    toc: "hover:text-[#355070]",
  },
  be: {
    label: "Belgia",
    accent: "#6e4553",
    accentSoft: "#f6f0f2",
    gradient: "from-[#6e4553] to-[#0f2a3d]",
    border: "border-l-[#6e4553]",
    badge: "bg-rose-50 text-[#6e4553] ring-rose-200",
    chip: "border-rose-100 bg-rose-50/70 text-[#6e4553]",
    toc: "hover:text-[#6e4553]",
  },
  pl: {
    label: "Polska",
    accent: "#6a3a42",
    accentSoft: "#f6f0f1",
    gradient: "from-[#6a3a42] to-[#0f2a3d]",
    border: "border-l-[#6a3a42]",
    badge: "bg-stone-100 text-[#6a3a42] ring-stone-300",
    chip: "border-stone-200 bg-stone-50 text-[#6a3a42]",
    toc: "hover:text-[#6a3a42]",
  },
  guide: {
    label: "Dla rodzica",
    accent: "#2d6a5a",
    accentSoft: "#e7f0ed",
    gradient: "from-[#0f2a3d] to-[#2d6a5a]",
    border: "border-l-[#2d6a5a]",
    badge: "bg-emerald-50 text-[#245648] ring-emerald-200",
    chip: "border-emerald-100 bg-emerald-50/80 text-[#245648]",
    toc: "hover:text-[#2d6a5a]",
  },
};

export function getArticleTheme(theme?: ArticleTheme) {
  return articleThemes[theme ?? "default"];
}
