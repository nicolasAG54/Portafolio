import { Component } from '@angular/core';

import { profile } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly profile = profile;
}
