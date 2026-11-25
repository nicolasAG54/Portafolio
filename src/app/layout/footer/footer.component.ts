import { Component, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../core/services/portfolio-language.service';

import { navItems, profile, socialLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly year = new Date().getFullYear();
  protected readonly profile = profile;
  protected readonly navItems = navItems;
  protected readonly socialLinks = socialLinks;
}
