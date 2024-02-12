import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'clients', component: ClientComponent },
{ path: 'meetings', component: MeetingComponent },
{ path: 'task', component: TaskComponent },
{ path: 'projects', component: ProjectComponent },
/*{ path: 'portfolios', component: PortfolioComponent },
{ path: '', redirectTo: '/clients', pathMatch: 'full' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
