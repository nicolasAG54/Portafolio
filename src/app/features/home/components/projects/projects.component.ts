import { Component } from '@angular/core';

import { projects } from '../../../../data/portfolio.data';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly projects = projects;
}
