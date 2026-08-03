import type { Metadata } from "next";
import { SocialShare } from "../components/social-share";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Formularz kontaktowy i newsletter dla rodziców młodych piłkarzy.",
};

const successMessage = "Dziękujemy, odezwiemy się wkrótce.";

type PageProps = {
  searchParams?: {
    contact?: string;
    newsletter?: string;
  };
};

export default function KontaktPage({ searchParams }: PageProps) {
  const showContactSuccess = searchParams?.contact === "ok";
  const showNewsletterSuccess = searchParams?.newsletter === "ok";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {(showContactSuccess || showNewsletterSuccess) && (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 lg:col-span-2">
          {successMessage}
        </p>
      )}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold text-slate-900">Kontakt</h1>
        <p className="mt-4 text-base leading-8 text-slate-700">
          Masz pytanie o swoją sytuację?
        </p>
        <p className="mt-4 text-base leading-8 text-slate-700">
          Napisz. Odpowiadam na podstawie własnego doświadczenia, nie jako
          agencja czy pośrednik.
        </p>

        <form className="mt-8 space-y-4" action="/api/contact" method="post">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
              Imię
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 transition focus:ring"
              placeholder="Twoje imię"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 transition focus:ring"
              placeholder="twoj@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="child-age"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Wiek dziecka
            </label>
            <input
              id="child-age"
              name="childAge"
              type="number"
              min={6}
              max={21}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 transition focus:ring"
              placeholder="np. 14"
            />
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-medium text-slate-800">
              Kraj zainteresowania
            </legend>
            <div className="flex flex-wrap gap-4 text-sm text-slate-700">
              {["Holandia", "Belgia", "Polska"].map((country) => (
                <label key={country} className="flex items-center gap-2">
                  <input type="checkbox" name="countries" value={country} />
                  {country}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 transition focus:ring"
              placeholder="Napisz wiadomość..."
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Wyślij wiadomość
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold text-slate-900">Newsletter</h2>
        <p className="mt-4 text-base leading-8 text-slate-700">
          Chcesz dostać checklistę PDF z krokami z tego poradnika? Zostaw e-mail
          poniżej.
        </p>

        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          action="/api/newsletter"
          method="post"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email do newslettera
          </label>
          <input
            id="newsletter-email"
            name="newsletter-email"
            type="email"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 transition focus:ring"
            placeholder="Podaj email"
          />
          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Zapisz się
          </button>
        </form>
      </section>
      <div className="lg:col-span-2">
        <SocialShare path="/kontakt" title="Kontakt dla rodziców młodych piłkarzy" />
      </div>
    </div>
  );
}

