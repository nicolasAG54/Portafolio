import { Component } from '@angular/core';

import { profile, socialLinks } from '../../../../data/portfolio.data';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  imports: [SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly profile = profile;
  protected readonly socialLinks = socialLinks;
}
