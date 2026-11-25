import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioLanguageService } from '../../../../core/services/portfolio-language.service';

import { projects } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [NgTemplateOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected readonly locale = inject(PortfolioLanguageService);
  protected readonly projects = projects;
}
