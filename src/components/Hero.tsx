"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  showVerServicios?: boolean;
}

export default function Hero({
  title = "Reparación, programación y desarrollo web",
  subtitle = "Reparación de PCs y laptops, recuperación de datos, landing pages, sitios web y programación a medida. Atendemos en Quilmes, Avellaneda, Lomas de Zamora, Banfield, Adrogué, Rafael Calzada y zona sur. Tu equipo y tu proyecto en buenas manos.",
  showCta = true,
  showVerServicios = true,
}: HeroProps) {
  const router = useRouter();

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 text-white">
      {/* Gradientes de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(99,102,241,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(16,185,129,0.15),transparent)]" />
      {/* Grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reparación · Landing pages · Desarrollo web · Zona sur
          </motion.p>
          <motion.h1
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          {showCta && (
            <motion.div
              className="relative z-20 mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contacto"
                className="relative z-20 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:shadow-emerald-500/40 active:scale-[0.98]"
              >
                Solicitar cotización
                <span aria-hidden>→</span>
              </Link>
              {showVerServicios && (
                <button
                  type="button"
                  onClick={() => router.push("/servicios")}
                  className="relative z-20 inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-600 bg-slate-800/50 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-slate-500 hover:bg-slate-700/50 active:scale-[0.98]"
                >
                  Ver servicios
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
