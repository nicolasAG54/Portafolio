import { Component, signal, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../../../core/services/portfolio-language.service';

import { skillGroups } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly skillGroups = skillGroups;
  protected readonly isPaused = signal(false);

  protected toggleMarquee(): void {
    this.isPaused.update((isPaused) => !isPaused);
  }
}
