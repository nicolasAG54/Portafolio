import { NgTemplateOutlet } from '@angular/common';
import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChildren } from '@angular/core';
import { PortfolioLanguageService } from '../../../../core/services/portfolio-language.service';

import { projects } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [NgTemplateOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly projects = projects;
  private readonly cards = viewChildren<ElementRef<HTMLElement>>('projectCard');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      // Let a tall card reveal its bottom before it settles into the stack.
      const observer = new ResizeObserver((entries) => {
        for (const { target, borderBoxSize } of entries) {
          (target as HTMLElement).style.setProperty(
            '--project-card-height',
            `${borderBoxSize[0].blockSize}px`,
          );
        }
      });

      for (const { nativeElement } of this.cards()) {
        if (nativeElement.classList.contains('project-card--featured')) {
          observer.observe(nativeElement, { box: 'border-box' });
        }
      }

      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
