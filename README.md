# ReparaSur

Sitio web para un servicio de reparación de computadoras y equipos tecnológicos, desarrollado con **Next.js**, **TypeScript** y **Tailwind CSS**.

## Características

- **Inicio**: Hero, resumen de servicios y llamada a la acción
- **Servicios**: Reparación de PCs, laptops, recuperación de datos, impresoras, redes, software y mantenimiento preventivo
- **Nosotros**: Misión y motivos para elegir el servicio
- **Contacto**: Formulario de cotización/consulta (listo para conectar con API o correo)
- Diseño responsive con menú móvil
- Colores y tipografía orientados a confianza y profesionalismo (esmeralda/slate)

## Cómo ejecutar

```bash
# Instalar dependencias (si aún no lo hiciste)
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
src/
├── app/              # Rutas y páginas (App Router)
│   ├── page.tsx      # Inicio
│   ├── servicios/
│   ├── nosotros/
│   └── contacto/
├── components/       # Header, Footer, Hero, ServiceCard
└── data/            # Datos de servicios (services.ts)
```

## Desplegar en Vercel

### Opción 1: Conectar con GitHub (recomendado)

1. Sube el proyecto a GitHub si aún no lo has hecho.
2. Entra en [vercel.com](https://vercel.com) e inicia sesión (con tu cuenta de GitHub).
3. Haz clic en **Add New…** → **Project**.
4. Importa el repositorio **reparasur**.
5. Vercel detectará Next.js automáticamente. Haz clic en **Deploy**.
6. En cada `git push` a la rama principal se generará un nuevo deploy.

### Opción 2: Desde la terminal

```bash
# Instalar Vercel CLI (una vez)
npm i -g vercel

# Desde la raíz del proyecto
vercel
```

Sigue los pasos (inicio de sesión si hace falta, confirmar proyecto y deploy). La primera vez te pedirá vincular o crear un proyecto en Vercel.

Tu sitio quedará en una URL como `reparasur.vercel.app` (o el nombre que elijas).

## Próximos pasos sugeridos

1. **Formulario de contacto**: Conectar el formulario con un backend (API Route de Next.js, Resend, Formspree, etc.) o con tu email.
2. **Datos de contacto**: Reemplazar en `Footer.tsx` y `contacto/page.tsx` los placeholders (teléfono y email) por los datos reales.
3. **Imágenes**: Añadir logo propio y fotos del taller o servicios en `public/`.
4. **SEO**: Ajustar `metadata` en cada página si quieres títulos/descripciones específicos por ruta.

## Tecnologías

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
