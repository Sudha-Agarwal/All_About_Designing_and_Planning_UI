import { Component } from '@angular/core';
import { Client } from '../client.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  clients: Client[];
  newClient: Client = { name: '', email: '', phone: '', address: '' };
  updatingClientId: number; // To store the ID of the client being updated
  updatingClient: Client = { name: '', email: '', phone: '', address: '' }; // To store the updated client data

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.ds.getClients()
      .subscribe(clients => this.clients = clients);
  }

  addClient(): void {
    this.ds.createClient(this.newClient)
      .subscribe({
        next: (response:any) => {
          alert(response.message);
          this.getClients();
          this.newClient = { name: '', email: '', phone: '', address: '' }; // Clear input fields after adding client
        },
        error: (error) => {
          console.error('Error adding client:', error);
          // Handle error appropriately, such as showing a user-friendly error message
        },
        complete: () => {
          console.log('Client addition completed');
        }
      });
  }
  
  deleteClient(clientId: number): void {
    this.ds.deleteClient(clientId)
      .subscribe({
        next: (response) => {
          alert(response)
          this.getClients();
        }
      });
  }

  // Method to initiate updating a client
  startUpdateClient(clientId: number): void {
    this.updatingClientId = clientId;
    // Find the client to update based on client ID
    this.updatingClient = this.clients.find(client => client.client_id === clientId);
  }

  // Method to cancel updating a client
  cancelUpdateClient(): void {
    this.updatingClientId = null;
    this.updatingClient = { name: '', email: '', phone: '', address: '' };
    this.getClients();
  }

  // Method to update a client
  updateClient(): void {
    this.ds.updateClient(this.updatingClientId, this.updatingClient)
      .subscribe({
        next:(response) => {      
          alert(response);    
            this.getClients();
            this.updatingClientId = null;
            this.updatingClient = { name: '', email: '', phone: '', address: '' };          
        }
      });
  }
}
