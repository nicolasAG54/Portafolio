# Portafolio Nicolás Alarcón Guzmán

Portafolio profesional construido con Angular moderno para presentar experiencia como Frontend Developer especializado en Angular, TypeScript, interfaces empresariales y pruebas E2E con Playwright.

## Stack

- Angular 21
- Standalone Components
- Angular Router
- TypeScript
- SCSS
- Signals
- Sintaxis moderna de control flow (`@if`, `@for`)

## Estructura

```text
src/app/
  core/
    services/
  shared/
    components/
  features/
    home/
      components/
  data/
  layout/
```

La información editable vive en:

```text
src/app/data/portfolio.data.ts
```

Edita ahí skills, proyectos, experiencia, datos de contacto, enlaces sociales y ruta del CV.

## Comandos

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm start
```

Compilar para producción:

```bash
npm run build
```

Ejecutar pruebas unitarias:

```bash
npm test
```

## CV

El enlace del CV apunta a:

```text
/assets/cv/nicolas-alarcon-cv.pdf
```

Agrega tu PDF final en:

```text
public/assets/cv/nicolas-alarcon-cv.pdf
```

## Deploy

### Vercel

1. Conecta el repositorio.
2. Framework preset: Angular.
3. Build command: `npm run build`.
4. Output directory: `dist/portfolio-nicolas/browser`.

### Netlify

1. Build command: `npm run build`.
2. Publish directory: `dist/portfolio-nicolas/browser`.

### GitHub Pages

Compila con el `base-href` del repositorio:

```bash
npx ng build --base-href /Portafolio/
```

Publica el contenido de:

```text
dist/portfolio-nicolas/browser
```
