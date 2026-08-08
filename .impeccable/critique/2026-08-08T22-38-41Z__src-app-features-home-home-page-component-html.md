---
target: portfolio landing page de Nicolas
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 5
timestamp: 2026-08-08T22-38-41Z
slug: src-app-features-home-home-page-component-html
---
Method: dual-agent (A: critique_design_review · B: critique_detector_evidence)

## Salud del diseño

| # | Heurística | Puntuación | Hallazgo clave |
|---|---|---:|---|
| 1 | Visibilidad del estado del sistema | 2 | La navegación y los controles comunican estado parcialmente, pero la página depende más del impacto visual que de una orientación clara. |
| 2 | Correspondencia con el mundo real | 3 | El lenguaje profesional es comprensible y está dirigido a reclutadores. |
| 3 | Control y libertad | 3 | Hay navegación, CTA claros y controles para pausar movimiento. |
| 4 | Consistencia y estándares | 3 | El sistema editorial, tipográfico y cromático es coherente. |
| 5 | Prevención de errores | 3 | La estructura evita interacciones confusas y conserva affordances convencionales. |
| 6 | Reconocimiento antes que recuerdo | 3 | Las secciones y acciones son reconocibles, aunque el nombre pierde legibilidad en el hero. |
| 7 | Flexibilidad y eficiencia | n/a | No es una herramienta de uso recurrente; es una superficie persuasiva. |
| 8 | Diseño estético y minimalista | 2 | El retrato, el nombre, las cintas y los CTA compiten por protagonismo. |
| 9 | Recuperación de errores | n/a | No existen flujos de error relevantes en esta landing. |
| 10 | Ayuda y documentación | n/a | No aplica a un portafolio de una sola página. |
| **Total** |  | **19/28** | **Aceptable, con problemas claros de jerarquía** |

## Veredicto de especificidad

La página sí se siente diseñada para Nicolás: la tipografía Kanit a escala monumental, el retrato editorial, las bandas cinéticas y la alternancia entre carbón y papel construyen una identidad reconocible. No parece una plantilla SaaS genérica.

Sin embargo, la expresión visual está desplazando la evidencia profesional. El nombre funciona como textura detrás del retrato en vez de cumplir su función principal: identificarte de inmediato. Además, repetir el fondo `#0c0c0c` en Hero, About, Skills, Projects y Value convierte una decisión potente en monotonía.

El detector determinista no reportó antipatrones: 0 hallazgos en `src/app/features/home/home-page.component.html`. Esto valida que no hay problemas obvios detectables por reglas estáticas en ese archivo, pero no valida composición, contraste perceptual ni jerarquía. La inspección del navegador no estuvo disponible porque `http://127.0.0.1:4200/` respondió `ERR_CONNECTION_REFUSED`; no existe overlay visual fiable para esta ejecución. La evaluación visual se apoya en la estructura y estilos actuales, junto con las capturas verificadas en la iteración anterior.

## Impresión general

El portfolio tiene personalidad y una dirección editorial más fuerte que la mayoría. El mayor problema es que el hero intenta ser póster antes que presentación profesional: la imagen domina, el apellido queda parcialmente ilegible y el negro ocupa demasiado tiempo visual. La oportunidad no es eliminar la estética oscura, sino usarla con más disciplina.

## Lo que funciona

- El sistema visual es autoral y coherente: escala tipográfica, retrato, textura y movimiento pertenecen al mismo lenguaje.
- Las acciones profesionales importantes —contacto y descarga de CV— están visibles y los estados de foco y reducción de movimiento están contemplados.
- La alternancia carbón/papel tiene potencial para crear capítulos claros y una narrativa memorable.

## Problemas prioritarios

### [P1] El retrato invalida la legibilidad del nombre

**Por qué importa:** el nombre es el dato más importante para un reclutador. El título está detrás (`z-index: -1`) y el retrato centrado alcanza hasta 500 px en escritorio y 82vw en móvil, por lo que la colisión no es ocasional: está programada. En móvil la pérdida es mayor.

**Corrección:** mantener un solapamiento máximo de 10–15%. Desplazar el retrato hacia la derecha en escritorio, reducirlo entre 15–20% y traer el nombre al frente. En móvil, separar el título y el retrato verticalmente; no superponer el rostro sobre “NICOLÁS”.

**Comando sugerido:** `$impeccable layout`

### [P1] El negro dejó de ser un acento y se volvió una superficie continua

**Por qué importa:** Hero, About, Skills, Projects y Value comparten casi el mismo negro. Esto aplana la narrativa, fatiga la vista y hace que los cambios de sección dependan de animaciones en vez de color, ritmo y espacio.

**Corrección:** conservar el carbón en el hero como marco del retrato, pero reemplazar el fondo exterior por tinta azul/ciruela muy oscura; alternar los capítulos intermedios con papel cálido y un tono mineral claro. El negro debe señalar momentos premium, no cubrir casi toda la experiencia.

**Comando sugerido:** `$impeccable colorize`

### [P1] La prueba profesional aparece demasiado tarde

**Por qué importa:** en una lectura de 20–30 segundos, un reclutador ve identidad y estilo antes que seniority, alcance o impacto. La experiencia concreta llega después de About, Skills y varias bandas en movimiento.

**Corrección:** llevar Experience justo después del Hero e incluir en la primera pantalla una señal verificable, por ejemplo “4+ años · 30+ módulos · Angular”. En móvil, reemplazar el resumen actualmente oculto por una versión compacta.

**Comando sugerido:** `$impeccable clarify`

### [P1] Los proyectos comunican concepto, pero no suficiente evidencia

**Por qué importa:** un líder técnico necesita ver el problema, tu rol, restricciones, decisiones y resultados. Mockups atractivos sin artefactos o contexto generan interés, pero no terminan de construir confianza.

**Corrección:** convertir cada proyecto en un caso breve con cinco datos: problema, responsabilidad, restricción, decisión y resultado. Etiquetar explícitamente los conceptos mientras no existan URLs o demos públicas.

**Comando sugerido:** `$impeccable shape`

### [P1] Hay demasiadas acciones compitiendo en el primer viewport

**Por qué importa:** navegación, contacto, CV en header, otro CV en hero y el indicador de scroll generan más decisiones de las necesarias antes de comprender la propuesta.

**Corrección:** dejar una acción primaria en el hero y una secundaria. Mantener “Descargar CV” solo en el header y usar el CTA principal para “Ver experiencia” o “Contactarme”.

**Comando sugerido:** `$impeccable distill`

## Alertas por persona

**Reclutador con 30 segundos:** reconoce una estética fuerte, pero el apellido puede no leerse completo y no recibe rápido las señales de experiencia. Es probable que recuerde la imagen antes que el perfil profesional.

**Líder técnico evaluando evidencia:** encuentra un portfolio bien presentado, pero los proyectos no muestran suficientes decisiones técnicas, restricciones ni resultados verificables. La confianza se queda a medio camino.

**Visitante móvil distraído:** pierde el resumen lateral, ve la colisión más intensa entre retrato y nombre y atraviesa bandas animadas antes de llegar a experiencia. La propuesta de valor se fragmenta.

## Observaciones menores

- “Scroll” rompe la consistencia de una interfaz escrita en español.
- “Claro” y “mantenible” se repiten y pierden fuerza; conviene variar con resultados concretos.
- Parte del texto de rol usa tamaños cercanos a 0.62–0.72rem, demasiado pequeños para lectura cómoda.
- El texto con gradiente y transparencia debe verificarse en forced-colors.
- La descripción del `<figure>` y el `alt` de la imagen pueden estar duplicando información.

## Preguntas para orientar el rediseño

- ¿El negro es una parte esencial de tu identidad o solo el escenario actual del retrato?
- ¿Por qué ocultar el dato que más necesita recordar un reclutador: tu nombre?
- ¿“4+ años · 30+ módulos · Angular” convence más en la primera pantalla que otra capa de animación?
- ¿Tus proyectos deberían aparecer antes de poder mostrar decisiones y resultados concretos?
