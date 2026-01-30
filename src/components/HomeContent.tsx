"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import ProcessStep from "@/components/ProcessStep";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";
import { services } from "@/data/services";

const features = [
  {
    icon: "⚡",
    title: "Respuesta rápida",
    description: "Diagnóstico en 24 horas y reparaciones urgentes disponibles.",
  },
  {
    icon: "🛡️",
    title: "Garantía incluida",
    description: "Reparaciones con garantía en mano de obra; proyectos web con soporte post-entrega.",
  },
  {
    icon: "💰",
    title: "Precios transparentes",
    description: "Cotización clara antes de comenzar, sin sorpresas. Reparación o desarrollo.",
  },
  {
    icon: "🔧",
    title: "Reparación y desarrollo",
    description: "Técnicos para tu equipo y desarrolladores para landing pages, sitios web y apps.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Contacto y diagnóstico",
    description:
      "Cuéntanos qué necesitás: reparación de equipo, landing page, sitio web o desarrollo a medida. Diagnóstico gratuito en reparaciones; consulta sin compromiso en proyectos web.",
  },
  {
    number: 2,
    title: "Cotización detallada",
    description:
      "Te enviamos un presupuesto claro: costo, tiempo estimado y garantía o soporte incluido.",
  },
  {
    number: 3,
    title: "Trabajo profesional",
    description:
      "Reparación con componentes de calidad o desarrollo con tecnologías actuales (Next.js, React). Te mantenemos informado en cada etapa.",
  },
  {
    number: 4,
    title: "Entrega y seguimiento",
    description:
      "Entrega de equipo reparado o proyecto web listo. Seguimiento y soporte para asegurar tu satisfacción.",
  },
];

export default function HomeContent() {
  return (
    <>
      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Por qué elegirnos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ventajas que nos distinguen
          </h2>
        </div>
        <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem} className="min-h-0">
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </StaggerChildren>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20" delay={0.1}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Qué hacemos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Nuestros servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Reparación de PCs y laptops, recuperación de datos, landing pages, sitios web y programación a medida. Soluciones integrales para tu equipo y tu negocio.
            </p>
          </div>
          <StaggerChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <ServiceCard
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </StaggerChildren>
          <div className="mt-14 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-slate-900/30 active:scale-[0.98]"
            >
              Ver todos los servicios
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8" delay={0.1}>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nuestro proceso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Un proceso simple y transparente desde el primer contacto hasta la entrega: reparación de tu equipo o tu landing page, sitio web o aplicación.
          </p>
        </div>
        <StaggerChildren className="mx-auto mt-14 max-w-2xl space-y-8">
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={staggerItem}>
              <ProcessStep {...step} />
            </motion.div>
          ))}
        </StaggerChildren>
      </AnimatedSection>

      <AnimatedSection
        className="relative overflow-hidden bg-slate-900 py-20 text-white"
        delay={0.1}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(16,185,129,0.15),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            ¿Reparación, landing page o desarrollo web?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Contáctanos y te daremos una cotización sin compromiso. Reparación de PCs, landing pages, sitios web y programación a medida. Atendemos en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada y más.
          </p>
          <Link
            href="/contacto"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:shadow-emerald-500/40 active:scale-[0.98]"
          >
            Solicitar cotización
            <span aria-hidden>→</span>
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
