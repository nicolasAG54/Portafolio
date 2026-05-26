import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updatePortfolioTags(): void {
    const pageTitle = 'Nicolás Alarcón Guzmán | Angular Frontend Developer';
    const description =
      'Portafolio profesional de Nicolás Alarcón Guzmán, Frontend Developer especializado en Angular, TypeScript, interfaces empresariales y pruebas E2E con Playwright.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Angular Developer, Frontend Developer Colombia, TypeScript, Playwright, interfaces empresariales',
    });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: '/assets/images/og-portfolio.svg' });
  }
}
