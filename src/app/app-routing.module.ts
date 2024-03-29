import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

import { AirHockeyComponent } from './components/projects/air-hockey/air-hockey.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectListComponent }, 
  { path: 'projects/air-hockey', component: AirHockeyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
