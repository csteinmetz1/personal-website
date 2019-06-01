import { Component, OnInit } from '@angular/core';

import Projects from '../../../assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = Projects.projectList;

  constructor() {

   }

  ngOnInit() {
  }

}
