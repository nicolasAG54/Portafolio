import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updatePortfolioTags(): void {
    const pageTitle = 'Nicolás Alarcón Guzmán | Frontend Angular';
    const description =
      'Portafolio de Nicolás Alarcón Guzmán, Frontend Developer especializado en Angular y TypeScript, con experiencia en aplicaciones empresariales y pruebas E2E.';
    const siteUrl = 'https://nicolasalarconguzman.site/';
    const socialImage = `${siteUrl}assets/images/og-portfolio.jpg`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Portafolio de Nicolás Alarcón Guzmán',
    });
    this.meta.updateTag({ property: 'og:url', content: siteUrl });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: socialImage });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Nicolás Alarcón Guzmán, Frontend Developer especializado en Angular',
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: socialImage });
  }
}
