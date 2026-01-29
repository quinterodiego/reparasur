export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string[];
  features?: string[];
  timeEstimate?: string;
  warranty?: string;
}

export const services: Service[] = [
  {
    id: "pcs",
    icon: "🖥️",
    title: "Reparación de PCs",
    description:
      "Mantenimiento, limpieza, cambio de componentes, instalación de software y solución de fallas en computadoras de escritorio.",
    details: [
      "Diagnóstico completo del sistema y componentes",
      "Limpieza profunda de ventiladores y disipadores",
      "Reemplazo de componentes dañados (RAM, disco duro, fuente de poder, placa madre)",
      "Actualización de hardware para mejorar rendimiento",
      "Instalación y configuración de sistemas operativos",
      "Optimización de velocidad y rendimiento",
    ],
    features: [
      "Todas las marcas y modelos",
      "Componentes originales y compatibles",
      "Presupuesto antes de reparar",
      "Garantía en componentes nuevos",
    ],
    timeEstimate: "1-3 días hábiles",
    warranty: "90 días en mano de obra",
  },
  {
    id: "laptops",
    icon: "💻",
    title: "Laptops y notebooks",
    description:
      "Reparación de pantallas, teclados, baterías, puertos y problemas de rendimiento en portátiles de todas las marcas.",
    details: [
      "Reparación y reemplazo de pantallas rotas o con fallas",
      "Cambio de teclados y trackpads",
      "Reemplazo de baterías agotadas o hinchadas",
      "Reparación de puertos USB, HDMI, carga y audio",
      "Solución de problemas de sobrecalentamiento",
      "Actualización de RAM y almacenamiento SSD",
      "Reparación de bisagras y estructura",
    ],
    features: [
      "Especialistas en todas las marcas principales",
      "Repuestos originales y de calidad",
      "Diagnóstico gratuito",
      "Servicio express disponible",
    ],
    timeEstimate: "2-5 días hábiles",
    warranty: "90 días en mano de obra, 6 meses en pantallas",
  },
  {
    id: "datos",
    icon: "💾",
    title: "Recuperación de datos",
    description:
      "Recuperación de archivos perdidos por borrado accidental, fallas de disco, virus o daño lógico.",
    details: [
      "Recuperación de archivos borrados accidentalmente",
      "Recuperación desde discos duros dañados físicamente",
      "Recuperación después de formateo o partición",
      "Recuperación de datos corruptos por virus",
      "Extracción de datos de dispositivos que no inician",
      "Recuperación de fotos, videos, documentos y bases de datos",
      "Backup y migración segura de datos",
    ],
    features: [
      "Laboratorio con herramientas especializadas",
      "Tasa de éxito superior al 85%",
      "Confidencialidad garantizada",
      "Sin datos, no cobramos",
    ],
    timeEstimate: "3-7 días hábiles (según complejidad)",
    warranty: "Garantía de confidencialidad y seguridad",
  },
  {
    id: "redes",
    icon: "📡",
    title: "Impresoras y redes",
    description:
      "Configuración de impresoras, redes WiFi, cableado y solución de problemas de conectividad.",
    details: [
      "Instalación y configuración de impresoras (USB, WiFi, red)",
      "Solución de problemas de impresión y atascos",
      "Configuración de routers y puntos de acceso WiFi",
      "Instalación y tendido de cableado de red",
      "Optimización de señal WiFi y cobertura",
      "Configuración de redes domésticas y empresariales",
      "Solución de problemas de conectividad e internet",
    ],
    features: [
      "Todas las marcas de impresoras",
      "Instalación de drivers y software",
      "Configuración de impresión en red",
      "Asesoría en equipos de red",
    ],
    timeEstimate: "Mismo día o 24 horas",
    warranty: "30 días en configuración",
  },
  {
    id: "software",
    icon: "⚙️",
    title: "Software y sistemas",
    description:
      "Instalación de Windows y Linux, antivirus, optimización y eliminación de virus y malware.",
    details: [
      "Instalación limpia de Windows 10/11 y Linux",
      "Eliminación completa de virus, malware y spyware",
      "Instalación y configuración de antivirus profesionales",
      "Optimización del sistema operativo y registro",
      "Instalación de software esencial (Office, navegadores, etc.)",
      "Configuración de actualizaciones automáticas",
      "Limpieza de archivos temporales y optimización de disco",
    ],
    features: [
      "Licencias originales de Windows",
      "Antivirus profesionales",
      "Optimización garantizada",
      "Capacitación básica incluida",
    ],
    timeEstimate: "2-4 horas",
    warranty: "30 días en eliminación de virus",
  },
  {
    id: "preventivo",
    icon: "🛡️",
    title: "Mantenimiento preventivo",
    description:
      "Limpieza interna, cambio de pasta térmica y revisiones para alargar la vida útil de tu equipo.",
    details: [
      "Limpieza profunda de polvo y suciedad interna",
      "Cambio de pasta térmica en procesador y GPU",
      "Lubricación de ventiladores y componentes móviles",
      "Verificación de temperatura y rendimiento",
      "Revisión de conexiones y componentes",
      "Actualización de drivers y BIOS",
      "Informe detallado del estado del equipo",
    ],
    features: [
      "Previene fallas mayores",
      "Mejora el rendimiento y reduce ruido",
      "Extiende la vida útil del equipo",
      "Precios especiales para mantenimientos periódicos",
    ],
    timeEstimate: "2-4 horas",
    warranty: "30 días en limpieza",
  },
  {
    id: "landing",
    icon: "📄",
    title: "Landing pages",
    description:
      "Páginas de aterrizaje para captar clientes, promociones o lanzamientos. Diseño moderno, responsive y optimizado para conversiones.",
    details: [
      "Diseño a medida según tu marca y objetivo",
      "Responsive (móvil, tablet, desktop)",
      "Formularios de contacto y captación de leads",
      "Integración con WhatsApp, email y redes",
      "Optimización para velocidad y SEO",
      "Dominio y hosting: asesoría e instalación",
    ],
    features: [
      "Entrega en 1-2 semanas",
      "Incluye 1 ronda de cambios",
      "Tecnología moderna (Next.js, React)",
      "Listo para Google y redes",
    ],
    timeEstimate: "1-2 semanas",
    warranty: "30 días de soporte post-entrega",
  },
  {
    id: "desarrollo-web",
    icon: "🌐",
    title: "Desarrollo web y sitios",
    description:
      "Sitios web institucionales, portfolios y páginas corporativas. Diseño profesional, rápido y fácil de actualizar.",
    details: [
      "Sitios de varias páginas (inicio, servicios, contacto, etc.)",
      "Diseño responsive y accesible",
      "Formularios, mapas, integración con redes",
      "SEO básico y meta tags configurados",
      "Panel de administración o actualización guiada",
      "Asesoría en dominio, hosting y mantenimiento",
    ],
    features: [
      "Tecnología actual (Next.js, React)",
      "Rendimiento y seguridad",
      "Soporte post-lanzamiento",
      "Documentación de uso",
    ],
    timeEstimate: "2-4 semanas (según alcance)",
    warranty: "30 días de soporte post-entrega",
  },
  {
    id: "programacion",
    icon: "💻",
    title: "Programación a medida",
    description:
      "Desarrollo de aplicaciones web, herramientas internas y soluciones a medida para tu negocio o proyecto.",
    details: [
      "Aplicaciones web y dashboards",
      "Automatización de procesos y reportes",
      "Integraciones con APIs y servicios externos",
      "Bases de datos y lógica de negocio",
      "Mantenimiento y evolución de proyectos existentes",
      "Consultoría técnica y estimaciones",
    ],
    features: [
      "Tecnologías modernas (React, Node, TypeScript)",
      "Código mantenible y documentado",
      "Presupuesto y plazos claros",
      "Soporte y mejoras continuas",
    ],
    timeEstimate: "Según proyecto (cotización sin compromiso)",
    warranty: "Acordada por proyecto",
  },
];
