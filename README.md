https://RoseBlue0.github.io/portfolio-template/


# Portfolio Template

Plantilla profesional de portfolio preparada para producción: responsive, accesible (básico), con animaciones cuidadas y arquitectura de CSS mantenible.

## Stack
- HTML5 (semántico)
- CSS3 (custom properties, Grid/Flex, tipografía fluida con `clamp()`)
- JavaScript (ES6+) — sin frameworks

## Ejecutar en local
1. Clona el repo
2. Abre `index.html` en tu navegador (o usa un servidor estático)
   - VS Code: extensión “Live Server”

## Estructura del proyecto
```text
portfolio-template/
├── index.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│   └── plan1.md
└── assets/
    ├── css/
    │   ├── index.css
    │   ├── base.css
    │   ├── layout.css
    │   └── components.css
    ├── js/
    │   └── main.js
    └── images/
        └── (añade aquí tus imágenes optimizadas)
```

## Personalización rápida
1. En `index.html`, cambia el nombre, el titular y las descripciones.
2. En `assets/css/base.css`, ajusta colores y escala tipográfica.
3. En `index.html`, sustituye los proyectos de ejemplo por los tuyos.

## Accesibilidad
- Contraste pensado para texto de cuerpo
- Navegación por teclado (focus visible)
- `prefers-reduced-motion` para reducir animaciones
- `alt` en imágenes

## Uso de IA

Para este proyecto se ha utilizado ChatGPT como asistente, siguiendo un enfoque en dos fases:
1) **Planificación**: antes de implementar una feature, se solicita a la IA un plan paso a paso y se documenta.
2) **Implementación**: solo después del plan documentado se procede a escribir o integrar el código.

La documentación del proceso se encuentra en `docs/plan1.md` (y `docs/planX.md` si se añadieran más tareas).


## Créditos
- Tipografía: stack del sistema
- Iconos: inline SVG
