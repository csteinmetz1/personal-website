import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { AirHockeyComponent } from './components/projects/air-hockey/air-hockey.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    CvComponent,
    ProjectListComponent,
    AirHockeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
