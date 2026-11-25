import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Injectable, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { profile } from '../../data/portfolio.data';
import { english } from '../../data/portfolio.en';

@Injectable({ providedIn: 'root' })
export class PortfolioLanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly app = inject(ApplicationRef);
  private readonly title = inject(Title);
  private readonly selection = signal<'es' | 'en'>('es');
  private pendingLanguage?: 'es' | 'en';

  readonly isEnglish = computed(() => this.selection() === 'en');
  readonly cvUrl = computed(() =>
    this.isEnglish() ? '/assets/cv/nicolas-alarcon-resume-en.pdf' : profile.cvUrl,
  );

  text(spanish: string): string {
    return this.isEnglish() ? english[spanish] ?? spanish : spanish;
  }

  toggle(animate: boolean): void {
    const currentLanguage = this.pendingLanguage ?? this.selection();
    const nextLanguage = currentLanguage === 'en' ? 'es' : 'en';

    if (this.pendingLanguage) {
      this.pendingLanguage = nextLanguage;
      return;
    }

    const browser = this.document.defaultView;
    if (
      !animate ||
      !browser ||
      this.document.hidden ||
      browser.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof this.document.startViewTransition !== 'function'
    ) {
      this.switchLanguage(nextLanguage);
      return;
    }

    this.pendingLanguage = nextLanguage;
    this.document.startViewTransition(() => {
      const language = this.pendingLanguage ?? nextLanguage;
      this.pendingLanguage = undefined;
      this.switchLanguage(language);
      // Render the translations before the browser captures the new view.
      this.app.tick();
    });
  }

  private switchLanguage(language: 'es' | 'en'): void {
    this.selection.set(language);
    const englishSelected = language === 'en';
    this.document.documentElement.lang = englishSelected ? 'en' : 'es-CO';
    this.title.setTitle(
      englishSelected
        ? 'Angular Frontend Developer | Nicolás Alarcón Guzmán'
        : 'Desarrollador Frontend Angular | Nicolás Alarcón Guzmán',
    );
  }
}
