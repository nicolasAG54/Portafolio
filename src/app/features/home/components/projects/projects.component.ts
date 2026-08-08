import { Component } from '@angular/core';

import { projects } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly projects = projects;
}
