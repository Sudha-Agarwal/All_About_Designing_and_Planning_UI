import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  title:string = "Bindings";
  buttonDisabled:boolean = false;
  imgPath = "../../assets/download.png";

  linkPath = "";
  isActive = true;

  clickMe(){
    alert("clicked");
  }

  hasError(){
    return false;
  }
}
