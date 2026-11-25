import { Component, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../../../core/services/portfolio-language.service';

import { experience } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly experience = experience;
}
