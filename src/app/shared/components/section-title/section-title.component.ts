import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  eyebrow = input.required<string>();
  title = input.required<string>();
  description = input<string>();
}
