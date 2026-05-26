import { Component, OnInit, inject } from '@angular/core';

import { SeoService } from '../../core/services/seo.service';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ValuePropositionComponent } from './components/value-proposition/value-proposition.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ValuePropositionComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updatePortfolioTags();
  }
}
