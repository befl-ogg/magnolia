# AGENTS.md

## Resumen del proyecto

Landing *scrollytelling* para **MAGNOLIA**, recinto de eventos de alta gama en Chilpancingo. Español (`lang="es"`), moneda MXN.

- **Stack:** Astro 7 (sitio estático) + Tailwind 3 vía PostCSS + JS vanilla. Fuentes de Google Fonts por `<link>`.
- `magnolia_recinto_de_eventos_prototipo_scrollytelling.html` es el **prototipo original** (referencia de diseño); la versión mantenida es la de `src/`.
- Sin tests, linter ni repo git.

## Mapa

| Ruta | Contenido |
|---|---|
| `src/pages/index.astro` | Compone las secciones |
| `src/layouts/Layout.astro` | `<head>`, fuentes, `<body>`, carga `scripts/main.js` |
| `src/components/` | `Header`, `Fase1Hero`…`Fase5Reserva`, `Footer`, `MobileBar` (HTML/clases Tailwind) |
| `src/styles/global.css` | Directivas Tailwind + tokens `:root` y CSS propio |
| `src/scripts/main.js` | Todo el JS (atmósferas, SVG, scroll engine, cotizador, FAQ) |
| `tailwind.config.mjs` | Colores (`obsidian`, `bone`, `bronze`…), fuentes, easing `quiet` |

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/ (verifica que compila)
npm run preview
```

Checklist antes de terminar: `npm run build` sin errores; sin errores en consola; revisar desktop (≥1024px) y móvil (~390px) (fase 3 usa `applyDesktopAtmosphereCopy` vs `setMobileAtmosphere`); si tocaste el cotizador, mover slider/atmósfera/complementos y enviar el formulario; `prefers-reduced-motion` sigue usable.

## Convenciones del código

- **No introduzcas dependencias nuevas** sin que se pida. Las llaves `{}` en HTML de `.astro` son expresiones: escápalas si aparecen en texto.
- **Estilos:** utilidades Tailwind inline; CSS propio solo para lo que Tailwind no cubre (reveals, grano mineral, animaciones). Usa los colores de `tailwind.config` (`obsidian`, `bone`, `concrete`, `bronze`, `ink`, …) y el easing `ease-quiet`; no introduzcas hex sueltos si existe token.
- **Tema de sección:** secciones claras llevan `data-theme="light"`; las oscuras usan `bg-obsidian text-bone`. Respeta la alternancia oscuro/claro.
- **Tipografía:** títulos `font-serif`, UI/cuerpo `font-sans`; tamaños fluidos con las variables `--text-*`.
- **Fuente única de verdad de atmósferas:** el arreglo `atmospheres` (4 entradas) alimenta fase 3 y el cotizador. Los valores `quoterValue` deben coincidir exactamente con `data-atmo-val` de los botones `.quoter-pill` y con las claves de `baseRates`. Si añades/renombras una atmósfera, actualiza los cuatro sitios.
- **JS:** vanilla, `const`/arrow functions, listeners dentro del `DOMContentLoaded`. Scroll con `requestAnimationFrame` (no añadas handlers de scroll sin throttle).
- **Feedback al usuario:** mensajes inline (`#form-feedback`, confirmación en `#concierge-confirmation`). **Nunca `alert()`** (el propio código lo anota).
- **Copy:** español de México, tono "quiet luxury" (sobrio, editorial). Moneda con `toLocaleString('es-MX')`.
- **Accesibilidad:** conserva `aria-*` existentes (nav, FAQ `aria-expanded`), objetivos táctiles ≥48px en controles del cotizador.

## Límites y trampas

- **Precios del cotizador son referenciales/ficticios:** `baseRates`, `guestFactor` (`(invitados-60)*55`) y `data-tier` de los complementos. No los cambies sin confirmación del negocio.
- **No hay envío real del formulario:** el `submit` hace `preventDefault()` y solo muestra confirmación local; no existe endpoint, WhatsApp ni correo configurado. No inventes URLs/teléfonos/correos.
- **`confirmSummaryBox.innerHTML` interpola `name` y `contact` del usuario sin escapar** (riesgo XSS si se reutiliza con datos reales). Si lo tocas, usa `textContent` o escapa.
- Copiar al portapapeles usa `document.execCommand('copy')` a propósito (fallback para contextos sin Clipboard API); no lo reemplaces sin mantener fallback.
- Los renders de interiores son **SVG generados por JS** (`buildLockedCameraSVG(prefix)`); no hay imágenes externas. Los `prefix` evitan colisión de `id` entre instancias de SVG: mantenlos únicos.
- El grano de fondo es un SVG `data:` inline en el CSS; no lo extraigas ni dupliques .

## Git y commits

No hay repositorio git ni historial; no existe convención de commits o ramas definida. Si se inicializa git, pregunta al usuario qué convención usar.
