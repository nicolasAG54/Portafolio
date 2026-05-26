import { Component } from '@angular/core';

import { skillGroups } from '../../../../data/portfolio.data';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-skills',
  imports: [SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly skillGroups = skillGroups;
}
