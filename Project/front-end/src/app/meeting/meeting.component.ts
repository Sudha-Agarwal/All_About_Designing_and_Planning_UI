import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Meeting } from '../meeting.model';
import { Client } from '../client.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'] // Correct the property name to 'styleUrls'
})
export class MeetingComponent {
  meetings: Meeting[];
  clients: Client[];
  newMeeting: Meeting = { client_id: null, client_name: '', date_time: null, agenda: '', location: '' }; // Add client_name property
  updatingMeetingId: number;
  updatingMeeting: Meeting = { client_id: null, client_name: '', date_time: null, agenda: '', location: '' }; // Add client_name property

  constructor(private meetingService: DataService) { }

  ngOnInit(): void {
    this.getMeetings();
    this.getClients(); // Call getClients to fetch client data
  }

  getClients(): void {
    this.meetingService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  getMeetings(): void {
    this.meetingService.getMeetings()
      .subscribe(meetings => this.meetings = meetings);
  }

  addMeeting(): void {
    this.meetingService.createMeeting(this.newMeeting)
      .subscribe({
        next: () => {
          this.getMeetings();
          this.newMeeting = { client_id: null, client_name: '', date_time: null, agenda: '', location: '' }; // Clear input fields after adding meeting
        },
        error: (error) => {
          console.error('Error adding meeting:', error);
          // Handle error appropriately, such as showing a user-friendly error message
        }
      });
  }

  deleteMeeting(meetingId: number): void {
    this.meetingService.deleteMeeting(meetingId)
      .subscribe({
        next: () => {
          this.getMeetings();
        }
      });
  }

  startUpdateMeeting(meetingId: number): void {
    this.updatingMeetingId = meetingId;
    this.updatingMeeting = this.meetings.find(meeting => meeting.meeting_id === meetingId);
  }

  cancelUpdateMeeting(): void {
    this.updatingMeetingId = null;
    this.updatingMeeting = { client_id: null, client_name: '', date_time: null, agenda: '', location: '' };
    this.getMeetings();
  }

  updateMeeting(): void {
    this.meetingService.updateMeeting(this.updatingMeetingId, this.updatingMeeting)
      .subscribe({
        next: () => {
          this.getMeetings();
          this.updatingMeetingId = null;
          this.updatingMeeting = { client_id: null, client_name: '', date_time: null, agenda: '', location: '' };
        }
      });
  }
}
