export class Meeting {
    meeting_id?: number;
    client_id: number;
    client_name: string; // Add this property
    date_time: Date;
    agenda: string;
    location: string;
  
    constructor(meeting_id: number, client_id: number, client_name: string, date_time: Date, agenda: string, location: string) {
      this.meeting_id = meeting_id;
      this.client_id = client_id;
      this.client_name = client_name; // Initialize this property
      this.date_time = date_time;
      this.agenda = agenda;
      this.location = location;
    }
}
