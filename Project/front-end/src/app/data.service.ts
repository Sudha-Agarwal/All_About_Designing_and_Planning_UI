import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from './meeting.model';
import { Project } from './project.model';
import { Task } from './task.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + '/clients');
  }

  createClient(client: Client): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/clients', client);
  }

  updateClient(clientId: number, client: Client): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/${clientId}`, client);
  }

  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clients/${clientId}`);
  }


  //Mettings
  getMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.apiUrl}/meetings`);
  }

  createMeeting(meeting: Meeting): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/meetings`, meeting);
  }

  updateMeeting(meetingId: number, meeting: Meeting): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/meetings/${meetingId}`, meeting);
  }

  deleteMeeting(meetingId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/meetings/${meetingId}`);
  }

  //Projects
getProjects(): Observable<Project[]> {
  return this.http.get<Project[]>(`${this.apiUrl}/projects`);
}

createProject(project: Project): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/projects`, project);
}

updateProject(projectId: number, project: Project): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/projects/${projectId}`, project);
}

deleteProject(projectId: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/projects/${projectId}`);
}

getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
}

createTask(task: Task): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/tasks`, task);
}

updateTask(taskId: number, task: Task): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/tasks/${taskId}`, task);
}

deleteTask(taskId: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/tasks/${taskId}`);
}



}
