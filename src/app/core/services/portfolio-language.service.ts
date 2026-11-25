import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { profile } from '../../data/portfolio.data';
import { english } from '../../data/portfolio.en';

@Injectable({ providedIn: 'root' })
export class PortfolioLanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly selection = signal<'es' | 'en'>('es');
  private languageFade?: Animation;

  readonly isEnglish = computed(() => this.selection() === 'en');
  readonly cvUrl = computed(() =>
    this.isEnglish() ? '/assets/cv/nicolas-alarcon-resume-en.pdf' : profile.cvUrl,
  );

  text(spanish: string): string {
    return this.isEnglish() ? english[spanish] ?? spanish : spanish;
  }

  toggle(): void {
    this.switchLanguage();
    this.languageFade?.cancel();

    const browser = this.document.defaultView;
    const body = this.document.body;
    if (
      !browser ||
      this.document.hidden ||
      browser.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof body?.animate !== 'function'
    ) {
      return;
    }

    this.languageFade = body.animate([{ opacity: 0.9 }, { opacity: 1 }], {
      duration: 180,
      easing: 'ease-out',
    });
  }

  private switchLanguage(): void {
    const englishSelected = !this.isEnglish();
    this.selection.set(englishSelected ? 'en' : 'es');
    this.document.documentElement.lang = englishSelected ? 'en' : 'es-CO';
    this.title.setTitle(
      englishSelected
        ? 'Angular Frontend Developer | Nicolás Alarcón Guzmán'
        : 'Desarrollador Frontend Angular | Nicolás Alarcón Guzmán',
    );
  }
}
