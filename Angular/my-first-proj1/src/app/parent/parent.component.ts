import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  ImgPath = "";
  parentMessage = "Message from parent";

  eventHandler(event:string){
    alert(event);
  }
}
