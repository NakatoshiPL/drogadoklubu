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
      className={`group relative border border-[var(--border)] bg-white p-5 transition hover:border-slate-400 ${theme.border} border-l-[3px]`}
    >
      <span
        className={`inline-flex rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${theme.badge}`}
      >
        {theme.label}
      </span>
      <h2 className="mt-3 text-lg font-semibold leading-snug text-[var(--brand)]">
        <Link href={href} className="hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{article.description}</p>
      <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <span>{article.readingMinutes} min</span>
        <span aria-hidden>·</span>
        <span className="font-semibold" style={{ color: theme.accent }}>
          Czytaj →
        </span>
      </p>
    </article>
  );
}
