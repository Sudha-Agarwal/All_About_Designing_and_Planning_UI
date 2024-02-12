export class Project {
    project_id?: number;
    client_id: number;
    client_name: string; // New field to store client name
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    status: string;
  
    constructor(project_id: number, client_id: number, client_name: string, name: string, description: string, start_date: Date, end_date: Date, status: string) {
      this.project_id = project_id;
      this.client_id = client_id;
      this.client_name = client_name;
      this.name = name;
      this.description = description;
      this.start_date = start_date;
      this.end_date = end_date;
      this.status = status;
    }
}
