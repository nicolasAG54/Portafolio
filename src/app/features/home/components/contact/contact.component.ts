import { Component } from '@angular/core';

import { profile, socialLinks } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly profile = profile;
  protected readonly socialLinks = socialLinks;
}
