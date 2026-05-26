import { Component } from '@angular/core';

import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { profile } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly profile = profile;
}
