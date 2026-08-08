import { Component } from '@angular/core';

import { experience } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly experience = experience;
}
