import { Component, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../../../core/services/portfolio-language.service';

import { profile, socialLinks } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly profile = profile;
  protected readonly socialLinks = socialLinks;
}
