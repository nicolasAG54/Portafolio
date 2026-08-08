import { Component, signal } from '@angular/core';

import { skillGroups } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly skillGroups = skillGroups;
  protected readonly isPaused = signal(false);

  protected toggleMarquee(): void {
    this.isPaused.update((isPaused) => !isPaused);
  }
}
