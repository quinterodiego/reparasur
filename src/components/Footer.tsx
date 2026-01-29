import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  servicios: [
    { label: "Reparación de PCs", href: "/servicios#pcs" },
    { label: "Laptops y notebooks", href: "/servicios#laptops" },
    { label: "Recuperación de datos", href: "/servicios#datos" },
    { label: "Impresoras y redes", href: "/servicios#redes" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Cotizar", href: "/contacto" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-semibold text-white"
            >
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="ReparaSur"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </span>
              ReparaSur
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Reparación de computadoras y equipos tecnológicos. Soluciones rápidas y confiables.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>📞 (XX) XXXX-XXXX</li>
              <li>✉️ info@reparasur.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {currentYear} ReparaSur. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
