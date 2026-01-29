import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export const metadata = {
  title: "Servicios | ReparaSur - Reparación, landing pages y desarrollo web",
  description:
    "Reparación de PCs y laptops, recuperación de datos, landing pages, desarrollo web y programación a medida en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada y zona sur.",
};

export default function ServiciosPage() {
  return (
    <>
      <Hero
        title="Nuestros servicios"
        subtitle="Reparación de PCs y laptops, recuperación de datos, landing pages, sitios web y programación a medida en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada y zona sur. Soluciones técnicas con garantía."
        showCta={true}
        showVerServicios={false}
      />
      <AnimatedSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Soluciones técnicas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que ofrecemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Reparación, landing pages, desarrollo web y programación a medida. Garantía y precios transparentes. Diagnóstico gratuito en reparaciones; consulta sin compromiso en proyectos web.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Detalles de cada servicio */}
      <AnimatedSection className="bg-slate-50 py-20" delay={0.1}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Información detallada
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Detalles de nuestros servicios
            </h2>
          </div>

          <div className="mt-14 space-y-16">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 text-3xl shadow-inner">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-lg text-slate-600">{service.description}</p>

                    {service.details && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-slate-900">Incluye:</h4>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {service.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-slate-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.features && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-slate-900">Características:</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
                      {service.timeEstimate && (
                        <div className="flex items-center gap-2">
                          <span>⏱️</span>
                          <span>
                            <strong>Tiempo estimado:</strong> {service.timeEstimate}
                          </span>
                        </div>
                      )}
                      {service.warranty && (
                        <div className="flex items-center gap-2">
                          <span>🛡️</span>
                          <span>
                            <strong>Garantía:</strong> {service.warranty}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-lg text-slate-600">
              ¿Necesitas más información o tienes dudas sobre algún servicio?
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 active:scale-[0.98]"
            >
              Contactar ahora
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
