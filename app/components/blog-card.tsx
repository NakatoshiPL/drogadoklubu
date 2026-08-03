import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-content";
import { getArticleTheme } from "@/lib/article-themes";

type BlogCardProps = {
  article: BlogArticle;
  href: string;
};

export function BlogCard({ article, href }: BlogCardProps) {
  const theme = getArticleTheme(article.theme);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${theme.border} border-l-4`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-80 ${theme.gradient}`}
        aria-hidden
      />
      <span
        className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${theme.badge}`}
      >
        {theme.label}
      </span>
      <h2 className="mt-3 text-lg font-semibold text-slate-900">
        <Link href={href} className="hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
      <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <span>{article.readingMinutes} min czytania</span>
        <span aria-hidden>·</span>
        <span className="font-medium" style={{ color: theme.accent }}>
          Czytaj więcej →
        </span>
      </p>
    </article>
  );
}
