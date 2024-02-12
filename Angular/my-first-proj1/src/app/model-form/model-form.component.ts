import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.css'
})
export class ModelFormComponent {
  emailPattern = "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
  RegisterationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
  });

  get f(){
    return this.RegisterationForm.controls;
  }

  submit(){
    console.log(this.RegisterationForm.value);
  }


}
