import { Component } from '@angular/core';

import { profile } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected readonly profile = profile;
}
