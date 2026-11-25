import { Component, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../../../core/services/portfolio-language.service';

import { valuePoints } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-value-proposition',
  templateUrl: './value-proposition.component.html',
  styleUrl: './value-proposition.component.scss',
})
export class ValuePropositionComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly valuePoints = valuePoints;
}
