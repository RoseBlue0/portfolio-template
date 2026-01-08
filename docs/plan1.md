# Plan 1 — Estructura base + arquitectura CSS + JS de navegación/tema

## Contexto
Este documento registra el uso de un asistente de IA (ChatGPT) siguiendo el enfoque en dos fases exigido por el briefing:
1) Planificación
2) Implementación (solo después del plan)

## Fase 1 — Planificación (solicitud a la IA)

### Prompt (texto exacto o lo más fiel posible)
Necesito una plantilla profesional de portfolio (nivel Vanilla) para un proyecto final de maquetación web con hojas de estilo.
Requisitos: HTML semántico, responsive mobile-first, tipografía fluida con clamp(), CSS organizado (base/layout/components + index.css “barrel”), animaciones suaves, prefers-reduced-motion, navegación con hamburguesa en móvil, estado activo por scroll, modo oscuro con persistencia (localStorage), y 404.html.
Además: README, LICENSE, .gitignore, carpeta docs para documentar el plan.

Dame primero un plan paso a paso (sin código), indicando estructura de carpetas y responsabilidades de cada archivo.

## Fase 2 — Implementación (aplicación del plan)

### Qué se implementó
- Estructura del proyecto:
  - `index.html`, `404.html`, `README.md`, `LICENSE`, `.gitignore`
  - `docs/plan1.md`
  - `assets/css/` con `base.css`, `layout.css`, `components.css`, `index.css`
  - `assets/js/main.js`
- HTML semántico con secciones: header/nav, hero, about, projects, contact, footer.
- CSS:
  - Variables y tipografía fluida con `clamp()`
  - Layout con Grid/Flex y enfoque mobile-first
  - Componentes (botones, cards, formulario, navegación)
  - Animación suave y fallback con `prefers-reduced-motion`
- JS:
  - Menú hamburguesa (mobile)
  - Toggle de tema (dark/light) persistido en `localStorage`
  - Indicador de sección activa por scroll (IntersectionObserver)
  - Año dinámico en el footer
