import { Component } from '@angular/core';

import { valuePoints } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-value-proposition',
  templateUrl: './value-proposition.component.html',
  styleUrl: './value-proposition.component.scss',
})
export class ValuePropositionComponent {
  protected readonly valuePoints = valuePoints;
}
