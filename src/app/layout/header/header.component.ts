import { Component, signal, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../core/services/portfolio-language.service';

import { navItems, profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly profile = profile;
  protected readonly navItems = navItems;
  protected readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
