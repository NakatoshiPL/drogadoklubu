type SocialShareProps = {
  path: string;
  title: string;
};

export function SocialShare({ path, title }: SocialShareProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jakdotrzeczdoklubu.pl";
  const url = encodeURIComponent(`${baseUrl}${path}`);
  const text = encodeURIComponent(title);

  const links = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    },
  ];

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-slate-900">Udostępnij stronę</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
