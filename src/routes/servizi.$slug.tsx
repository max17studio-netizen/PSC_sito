import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/site";

export const Route = createFileRoute("/servizi/$slug")({
  component: Servizio,
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.service.title} — P.S.C. Edilizia Moderna`
          : "Servizi — P.S.C. Edilizia Moderna",
      },
    ],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 py-32">
        <p className="text-muted">Servizio non trovato.</p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/servizi">Torna ai servizi</Link>
        </Button>
      </div>
    </SiteShell>
  ),
});

function Servizio() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteShell>
      <PageHero kicker="Servizi" title={service.title} lead={service.lead} />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <img
            src={service.image}
            alt={service.title}
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div className="mt-10 space-y-4 leading-relaxed text-muted">
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-8 px-0">
            <Link to="/servizi">
              <ArrowLeft className="size-4" /> Tutti i servizi
            </Link>
          </Button>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-xl bg-surface p-6 md:sticky md:top-24 md:p-8">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
              In questo intervento
            </p>
            <ul className="mt-5 space-y-3">
              {service.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-bg">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Preventivo per {service.title.toLowerCase()}
            </h2>
            <p className="mt-4 text-muted">
              Descrivete l’immobile e cosa vorreste fare. Vi ricontattiamo per
              un sopralluogo a Lissone o in Brianza.
            </p>
          </div>
          <ContactForm defaultService={service.slug} />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
            Altri servizi
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/servizi/$slug"
                params={{ slug: s.slug }}
                className="group"
              >
                <img
                  src={s.image}
                  alt=""
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 font-display text-2xl font-medium group-hover:text-primary">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
