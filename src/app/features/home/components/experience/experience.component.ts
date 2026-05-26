import { Component } from '@angular/core';

import { experience } from '../../../../data/portfolio.data';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  imports: [SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly experience = experience;
}
