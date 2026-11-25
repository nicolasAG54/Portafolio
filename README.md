# Nicolás Alarcón Guzmán · Software Developer

Systems Engineer based in Colombia. I build business applications with Angular and TypeScript, integrate REST APIs and .NET services, and automate document workflows with Python.

[Live portfolio](https://nicolasalarconguzman.site/) · [LinkedIn](https://www.linkedin.com/in/nicolasalarconguzman/)

## Selected work

| Project | What to look at |
| --- | --- |
| [This portfolio](https://nicolasalarconguzman.site/) | Angular 21 standalone components, TypeScript, SCSS and a data-driven project and experience catalog. |
| Girardot Express | [Live commercial site](https://girardotexpress.netlify.app/) and a [separate Angular implementation](https://github.com/nicolasAG54/girardot-express-angular) with server rendering and prerendered public routes. |
| [Corpoyarumos institutional site](https://corpoyarumos.netlify.app/) | Angular website presenting the organization's work. The document workflow below is a separate project. |

### Document automation at Corpoyarumos

The team faced a backlog of 548 assessments. I built a Python script that called the OpenAI API to generate assessment narratives. The process went from approximately **30 to 2 minutes per assessment**, helping the team deliver all **548 assessments** on schedule. I extended the automation to the **548 corresponding strengthening plans** and to the curriculum design for each approved plan.

[Run the public reconstruction with synthetic data](https://github.com/nicolasAG54/corpoyarumos-automation-demo).

## Run locally

Use Node.js 22.12+ (22.x) or Node.js 24+ and npm 11.6.2.

```bash
npm ci
npm start
```

Open `http://localhost:4200`. Update project and experience content in [`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts).

```bash
npm test -- --watch=false
npm run build
```

The production build is written to `dist/portfolio-nicolas/browser`. The included [Netlify configuration](netlify.toml) builds and serves it at the root of the site.
