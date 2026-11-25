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

  readonly isEnglish = computed(() => this.selection() === 'en');
  readonly cvUrl = computed(() =>
    this.isEnglish() ? '/assets/cv/nicolas-alarcon-resume-en.pdf' : profile.cvUrl,
  );

  text(spanish: string): string {
    return this.isEnglish() ? english[spanish] ?? spanish : spanish;
  }

  toggle(): void {
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
