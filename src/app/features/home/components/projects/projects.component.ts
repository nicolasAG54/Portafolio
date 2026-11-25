import { NgTemplateOutlet } from '@angular/common';
import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
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
  private readonly stack = viewChild.required<ElementRef<HTMLElement>>('projectStack');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const stack = this.stack().nativeElement;
      const firstCard = stack.firstElementChild;
      if (!firstCard) {
        return;
      }

      // Equal grid rows share the same height and must clear the same viewport edge.
      const observer = new ResizeObserver(([entry]) => {
        stack.style.setProperty('--project-card-height', `${entry.borderBoxSize[0].blockSize}px`);
      });
      observer.observe(firstCard, { box: 'border-box' });
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
