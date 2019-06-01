import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent }
];

// path: 'detail/:id', component: HeroDetailComponent

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
