import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../task.model';
import { Project } from '../project.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[];
  projects: Project[];
  newTask: Task = {
    project_id: null, title: '', description: '', due_date: null, status: '',
    project_name: ''
  };
  updatingTaskId: number;
  updatingTask: Task = {
    project_id: null, title: '', description: '', due_date: null, status: '',
    project_name: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTasks();
    this.getProjects();
  }

  getTasks(): void {
    this.dataService.getTasks()
      .subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  getProjects(): void {
    this.dataService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  addTask(): void {
    this.dataService.createTask(this.newTask)
      .subscribe({
        next: () => {
          this.getTasks();
          this.newTask = { project_id: null, title: '', description: '', due_date: null, status: '' , project_name:''};
        },
        error: (error: any) => {
          console.error('Error adding task:', error);
        }
      });
  }

  deleteTask(taskId: number): void {
    this.dataService.deleteTask(taskId)
      .subscribe({
        next: () => {
          this.getTasks();
        }
      });
  }

  startUpdateTask(taskId: number): void {
    this.updatingTaskId = taskId;
    this.updatingTask = this.tasks.find(task => task.task_id === taskId);
  }

  cancelUpdateTask(): void {
    this.updatingTaskId = null;
    this.updatingTask = { project_id: null, title: '', description: '', due_date: null, status: '', project_name:'' };
  }

  updateTask(): void {
    this.dataService.updateTask(this.updatingTaskId, this.updatingTask)
      .subscribe({
        next: () => {
          this.getTasks();
          this.updatingTaskId = null;
          this.updatingTask = { project_id: null, title: '', description: '', due_date: null, status: '',project_name:'' };
        }
      });
  }
}
