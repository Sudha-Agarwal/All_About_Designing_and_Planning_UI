import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
user = {email:'', password:''};

constructor(private ds:DataService){}

  onSubmit(){
    alert("form submitted");
    console.log(this.user);
    //this.user.email = 'sudha';
    this.ds.checkLogin(this.user).subscribe({
      next:(data:any) => console.log(data.message)
    })



  }

}
