import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export const metadata = {
  title: "Nosotros | ReparaSur",
  description: "Conoce a ReparaSur: tu taller de confianza para reparación de computadoras y equipos tecnológicos.",
};

const values = [
  {
    icon: "🎯",
    title: "Transparencia",
    description: "Cotizaciones claras y honestas, sin costos ocultos. Te informamos todo antes de comenzar.",
  },
  {
    icon: "⚡",
    title: "Rapidez",
    description: "Diagnóstico en 24 horas y servicio express disponible para urgencias.",
  },
  {
    icon: "🛡️",
    title: "Garantía",
    description: "Todas nuestras reparaciones incluyen garantía en mano de obra y componentes.",
  },
  {
    icon: "🤝",
    title: "Confianza",
    description: "Años de experiencia y cientos de clientes satisfechos nos respaldan.",
  },
];

const guarantees = [
  "Garantía de 90 días en mano de obra para todas las reparaciones",
  "Garantía extendida en componentes nuevos (según fabricante)",
  "Diagnóstico gratuito antes de cualquier reparación",
  "Sin costo si no podemos reparar tu equipo",
  "Confidencialidad total en recuperación de datos",
  "Seguimiento post-reparación para asegurar tu satisfacción",
];

export default function NosotrosPage() {
  return (
    <>
      <Hero
        title="Sobre ReparaSur"
        subtitle="Años de experiencia reparando computadoras y ayudando a personas y empresas a recuperar sus equipos."
        showCta={false}
      />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Quiénes somos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Nuestra misión
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600">
            En ReparaSur nos dedicamos a ofrecer soluciones técnicas rápidas, transparentes y con garantía.
            Creemos que un equipo en buen estado es fundamental para el trabajo y el estudio, por eso nos
            esforzamos en dar un trato cercano y precios justos.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Desde nuestros inicios, hemos ayudado a cientos de clientes a recuperar sus equipos y datos.
            Nos especializamos en reparación de computadoras de escritorio, laptops, recuperación de datos
            y solución de problemas de software y hardware. Trabajamos con todas las marcas principales
            y utilizamos componentes de calidad para asegurar la durabilidad de nuestras reparaciones.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Nuestros valores
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Lo que nos guía
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FeatureCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Ventajas
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            ¿Por qué elegirnos?
          </h2>
          <ul className="mt-8 space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Diagnóstico claro y cotización sin compromiso:</strong>{" "}
                Antes de reparar, te explicamos exactamente qué necesita tu equipo y cuánto costará.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Reparaciones con garantía:</strong> Todas nuestras
                reparaciones incluyen garantía en mano de obra. Si algo falla, lo reparamos sin costo adicional.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Atención completa:</strong> Reparamos PCs, laptops,
                impresoras, configuramos redes y recuperamos datos. Un solo lugar para todas tus necesidades técnicas.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Recuperación de datos especializada:</strong> Contamos con
                herramientas profesionales para recuperar archivos perdidos, incluso en casos complejos.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Respuesta rápida:</strong> Diagnóstico en 24 horas y servicio
                express disponible. Entendemos que tu equipo es importante para tu trabajo o estudios.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Comunicación directa:</strong> Hablamos contigo directamente,
                sin intermediarios. Resolvemos tus dudas y te mantenemos informado durante todo el proceso.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <strong className="text-slate-900">Precios justos:</strong> Trabajamos con transparencia total.
                No hay costos ocultos ni sorpresas al final.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Garantías */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Compromiso
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Nuestras garantías
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Tu tranquilidad es nuestra prioridad. Por eso ofrecemos estas garantías en todos nuestros servicios.
              </p>
            </div>
            <div className="mt-10 rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                      ✓
                    </span>
                    {guarantee}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            ¿Listo para reparar tu equipo?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Si tu computadora, laptop o impresora está fallando, no dudes en contactarnos.
            Te orientamos y te damos una solución a la medida.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 active:scale-[0.98]"
            >
              Contactar ahora
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
