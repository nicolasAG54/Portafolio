import { Component } from '@angular/core';

import { navItems, profile, socialLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly profile = profile;
  protected readonly navItems = navItems;
  protected readonly socialLinks = socialLinks;
}
