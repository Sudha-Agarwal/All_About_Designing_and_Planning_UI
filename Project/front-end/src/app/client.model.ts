export class Client {
    client_id?: number;
    name: string;
    email: string;
    phone: string;
    address: string;
  
    constructor(client_id: number, name: string, email: string, phone: string, address: string) {
      this.client_id = client_id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
    }
  }
  