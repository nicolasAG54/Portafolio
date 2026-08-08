---
name: Nicolas Portfolio — Digital Atelier
description: Un portafolio frontend inmersivo, monumental y orientado a reclutadores.
colors:
  carbon: "#0c0c0c"
  carbon-raised: "#151515"
  mist: "#d7e2ea"
  paper: "#f3f1eb"
  ink: "#111111"
  violet: "#7621b0"
  magenta: "#b600a8"
  ember: "#be4c00"
  gradient-top: "#686d76"
  plum-deep: "#18011f"
  focus-magenta: "#d746c8"
  pure-white: "#ffffff"
  dashboard-navy: "#07152c"
  violet-canvas: "#151024"
  ember-canvas: "#1a1210"
typography:
  display-hero:
    fontFamily: "Kanit, Arial Narrow, sans-serif"
    fontSize: "clamp(4.6rem, 15vw, 14rem)"
    fontWeight: 900
    lineHeight: 0.74
    letterSpacing: "-0.04em"
  display-section:
    fontFamily: "Kanit, Arial Narrow, sans-serif"
    fontSize: "clamp(4.2rem, 12vw, 10.5rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Kanit, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 4rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Kanit, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Kanit, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  label-micro:
    fontFamily: "Kanit, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  sm: "8px"
  md: "14px"
  tile: "18px"
  pill: "999px"
  panel: "clamp(24px, 4vw, 60px)"
spacing:
  page: "clamp(20px, 3vw, 48px)"
  section: "clamp(88px, 12vw, 180px)"
components:
  button-primary:
    backgroundColor: "{colors.magenta}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
---

# Design System: Digital Atelier

## Overview

**Creative North Star: “Digital Atelier”**

El portafolio se comporta como un showreel de estudio digital: tipografía que ocupa la arquitectura, una figura humana que atraviesa el primer plano y bandas de tecnología que mantienen el ritmo. Rechaza el portafolio estándar de tarjetas azules sobre un hero convencional. La expresividad sirve a una lectura de reclutamiento clara: especialidad, experiencia, proyectos, CV y contacto.

**Key Characteristics:**

- Escala tipográfica extrema con una lectura inequívoca.
- Alternancia entre carbón inmersivo y papel cálido para marcar capítulos.
- Bordes amplios y formas redondeadas solo en grandes superficies y controles.
- Movimiento horizontal continuo y apilamiento vertical como gestos principales.
- Contenido real y verificable; los visuales ilustran capacidades, no clientes ficticios.

## Colors

La estrategia es de paleta completa contenida: carbón y niebla dominan; magenta, violeta y naranja forman un único gesto energético en acciones clave.

**The One Energy Rule.** El gradiente multicolor aparece en la acción primaria y en un número reducido de detalles, nunca como fondo genérico de cada bloque.

## Typography

**Display Font:** Kanit (con Arial Narrow como fallback)
**Body Font:** Kanit (con system-ui como fallback)

Kanit funciona como material estructural: títulos negros y comprimidos para la escala, pesos medios para lectura técnica. Los labels son breves, en mayúsculas y con tracking amplio.

**The Scale Is Structure Rule.** Los títulos de sección deben definir la composición y no vivir dentro de una tarjeta o un encabezado convencional.

## Layout

Las secciones usan ancho completo y padding fluido. El hero ocupa al menos el viewport; la figura se superpone al título sin bloquear su lectura. Las bandas de stack rompen el eje vertical. Experiencia pasa a un lienzo claro y proyectos usa tarjetas sticky escalonadas. En móvil, las superposiciones se reducen, la información se apila y ningún texto depende de `whitespace-nowrap` para caber.

## Elevation & Depth

La profundidad procede de capas superpuestas, recortes, imágenes y cambios de plano. Las sombras son ambientales y oscuras; no se usan brillos neón ni glassmorphism repetido.

## Shapes

Los grandes capítulos y tarjetas de proyecto usan radios amplios y continuos. Los botones son píldoras. Elementos editoriales internos —líneas, etiquetas, numeración— permanecen rectos para equilibrar la suavidad.

## Components

- **Navegación:** ligera, persistente y transparente sobre el lienzo oscuro; el CTA de CV mantiene prioridad visual.
- **Botón primario:** píldora con gradiente magenta–violeta–naranja, borde claro fino y elevación táctil.
- **Botón ghost:** borde niebla, texto en mayúsculas y relleno sutil al hover.
- **Marquee técnico:** dos pistas con direcciones opuestas y duplicación semánticamente oculta.
- **Tarjeta sticky de proyecto:** encabezado editorial, visual de interfaz y evidencia técnica; se apila sin ocultar controles.

## Do's and Don'ts

### Do

- Hacer visible el rol y el CTA de CV en el primer viewport.
- Mantener foco, contraste y contenido usable sin animación.
- Variar densidad entre capítulos oscuros, claros y visuales.
- Etiquetar honestamente los casos de estudio sin repositorio público.

### Don't

- No convertir el portafolio en una plantilla SaaS de tarjetas flotantes.
- No usar los GIF o proyectos 3D del prompt como si fueran trabajo de Nicolás.
- No inventar métricas, clientes, enlaces o resultados.
- No repetir gradientes, pills y sombras en todos los elementos.
