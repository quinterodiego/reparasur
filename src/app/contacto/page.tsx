"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Hero from "@/components/Hero";

const ZonesMap = dynamic(() => import("@/components/ZonesMap"), { ssr: false });

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error ?? "No se pudo enviar el mensaje. Intentá de nuevo.");
        setLoading(false);
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError("Error de conexión. Revisá tu internet e intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Hero
        title="Contacto"
        subtitle="Cuéntanos qué necesitás: reparación de PC, landing page, sitio web o programación a medida. Atendemos en Quilmes, Avellaneda, Lomas, Banfield, Adrogué, Rafael Calzada y más. Te respondemos a la brevedad."
        showCta={false}
      />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          {sent ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-10 text-center shadow-lg shadow-emerald-500/5">
              <p className="text-xl font-semibold text-emerald-800">
                ¡Mensaje enviado correctamente!
              </p>
              <p className="mt-3 text-emerald-700">
                Te contactaremos a la brevedad con la información que nos dejaste.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 rounded-full border-2 border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 shadow-sm transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 shadow-sm transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 shadow-sm transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="(XX) XXXX-XXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 shadow-sm transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Describe el problema de tu equipo o lo que necesitas..."
                />
              </div>
              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-slate-900 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-800 disabled:opacity-70 active:scale-[0.99]"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
          <div className="mt-12 rounded-2xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-800">También puedes contactarnos por:</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>📞 Teléfono: (11) 5176-2371</li>
              <li>✉️ Email: reparasurarg@gmail.com</li>
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">Zona de cobertura</h2>
            <p className="mb-6 text-slate-600">
              Atendemos en Quilmes, Avellaneda, Lomas de Zamora, Banfield, Adrogué, Rafael Calzada y alrededores de la zona sur del GBA.
            </p>
            <ZonesMap />
          </div>
        </div>
      </section>
    </>
  );
}
