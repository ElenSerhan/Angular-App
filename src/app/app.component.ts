import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'patrice-lover';
}

export class ProjectsService {
  public getProjects(): any[] {
      let projects = [];

      projects.push({ title: 'Project 1', description: '[DESCRIPTION]'});
      projects.push({ title: 'Project 2', description: '[DESCRIPTION]'});

      return projects;
  }
}


