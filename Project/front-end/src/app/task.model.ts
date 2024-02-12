export class Task {
    task_id?: number;
    project_id: number;
    project_name: string;
    title: string;
    description?: string;
    due_date: Date;
    status: string;
  
    constructor(project_id: number, project_name: string, title: string, due_date: Date, status: string, description?: string, task_id?: number) {
      this.task_id = task_id;
      this.project_id = project_id;
      this.project_name = project_name;
      this.title = title;
      this.description = description;
      this.due_date = due_date;
      this.status = status;
    }
  }
  