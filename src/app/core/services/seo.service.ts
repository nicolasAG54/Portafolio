import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { profile } from '../../data/portfolio.data';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updatePortfolioTags(): void {
    const pageTitle = profile.pageTitle.en;
    const description = profile.pageDescription;
    const siteUrl = 'https://nicolasalarconguzman.site/';
    const socialImage = `${siteUrl}assets/images/og-portfolio-full-stack.jpg`;

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Nicolás Alarcón Guzmán | Portfolio',
    });
    this.meta.updateTag({ property: 'og:url', content: siteUrl });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: socialImage });
    this.meta.updateTag({
      property: 'og:image:alt',
      content: 'Nicolás Alarcón Guzmán, Full-Stack Developer',
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: socialImage });
  }
}
