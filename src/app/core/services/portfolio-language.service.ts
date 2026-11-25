import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Injectable, computed, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { profile } from '../../data/portfolio.data';
import { english } from '../../data/portfolio.en';

@Injectable({ providedIn: 'root' })
export class PortfolioLanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly app = inject(ApplicationRef);
  private readonly selection = signal<'es' | 'en'>('es');
  private transitionRunning = false;

  readonly isEnglish = computed(() => this.selection() === 'en');
  readonly cvUrl = computed(() =>
    this.isEnglish() ? '/assets/cv/nicolas-alarcon-resume-en.pdf' : profile.cvUrl,
  );

  text(spanish: string): string {
    return this.isEnglish() ? english[spanish] ?? spanish : spanish;
  }

  toggle(): void {
    if (this.transitionRunning) return;

    const browser = this.document.defaultView;
    if (!browser || this.document.hidden || browser.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.switchLanguage();
      return;
    }

    if (typeof this.document.startViewTransition === 'function') {
      this.transitionRunning = true;
      const transition = this.document.startViewTransition(() => {
        this.switchLanguage();
        this.app.tick();
      });
      void transition.finished.then(this.endTransition, this.endTransition);
      return;
    }

    this.switchLanguage();
    if (typeof this.document.body.animate === 'function') {
      this.transitionRunning = true;
      const fade = this.document.body.animate([{ opacity: 0.65 }, { opacity: 1 }], {
        duration: 2000,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });
      void fade.finished.then(this.endTransition, this.endTransition);
    }
  }

  private readonly endTransition = (): void => {
    this.transitionRunning = false;
  };

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
