import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../project.model';
import { Client } from '../client.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[];
  clients: Client[];
  newProject: Project = {
    client_id: null, name: '', description: '', start_date: null, end_date: null, status: '',
    client_name: ''
  };
  updatingProjectId: number;
  updatingProject: Project = {
    client_id: null, name: '', description: '', start_date: null, end_date: null, status: '',
    client_name: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getClients();
  }

  getClients(): void {
    this.dataService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  getProjects(): void {
    this.dataService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  addProject(): void {
    this.dataService.createProject(this.newProject)
      .subscribe({
        next: () => {
          this.getProjects();
          this.newProject = { client_id: null, name: '', description: '', start_date: null, end_date: null, status: '',client_name:'' };
        },
        error: (error) => {
          console.error('Error adding project:', error);
        }
      });
  }

  deleteProject(projectId: number): void {
    this.dataService.deleteProject(projectId)
      .subscribe({
        next: () => {
          this.getProjects();
        }
      });
  }

  startUpdateProject(projectId: number): void {
    this.updatingProjectId = projectId;
    this.updatingProject = this.projects.find(project => project.project_id === projectId);
  }

  cancelUpdateProject(): void {
    this.updatingProjectId = null;
    this.updatingProject = { client_id: null, name: '', description: '', start_date: null, end_date: null, status: '', client_name:'' };
  }

  updateProject(): void {
    this.dataService.updateProject(this.updatingProjectId, this.updatingProject)
      .subscribe({
        next: () => {
          this.getProjects();
          this.updatingProjectId = null;
          this.updatingProject = { client_id: null, name: '', description: '', start_date: null, end_date: null, status: '' , client_name:''};
        }
      });
  }
}
