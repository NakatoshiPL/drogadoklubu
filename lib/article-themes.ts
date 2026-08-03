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
    accent: "#1a2a6c",
    accentSoft: "#eef2ff",
    gradient: "from-[#1a2a6c] to-[#334155]",
    border: "border-l-[#1a2a6c]",
    badge: "bg-indigo-50 text-indigo-900 ring-indigo-200",
    chip: "border-indigo-200 bg-indigo-50 text-indigo-900",
    toc: "hover:text-indigo-800",
  },
  nl: {
    label: "Holandia · KNVB",
    accent: "#FF6600",
    accentSoft: "#fff4eb",
    gradient: "from-[#21468B] via-[#AE1C28] to-[#FF6600]",
    border: "border-l-[#FF6600]",
    badge: "bg-orange-50 text-orange-950 ring-orange-200",
    chip: "border-orange-200 bg-orange-50 text-orange-950",
    toc: "hover:text-orange-700",
  },
  be: {
    label: "Belgia",
    accent: "#EF3340",
    accentSoft: "#fef2f2",
    gradient: "from-black via-[#FDDA24] to-[#EF3340]",
    border: "border-l-[#EF3340]",
    badge: "bg-red-50 text-red-950 ring-red-200",
    chip: "border-red-200 bg-red-50 text-red-900",
    toc: "hover:text-red-700",
  },
  pl: {
    label: "Polska",
    accent: "#DC143C",
    accentSoft: "#fef2f4",
    gradient: "from-[#DC143C] to-[#991B1B]",
    border: "border-l-[#DC143C]",
    badge: "bg-rose-50 text-rose-950 ring-rose-200",
    chip: "border-rose-200 bg-rose-50 text-rose-900",
    toc: "hover:text-rose-700",
  },
  guide: {
    label: "Dla rodzica",
    accent: "#f7931e",
    accentSoft: "#fff7ed",
    gradient: "from-[#1a2a6c] to-[#f7931e]",
    border: "border-l-[#f7931e]",
    badge: "bg-amber-50 text-amber-950 ring-amber-200",
    chip: "border-amber-200 bg-amber-50 text-amber-950",
    toc: "hover:text-amber-800",
  },
};

export function getArticleTheme(theme?: ArticleTheme) {
  return articleThemes[theme ?? "default"];
}
