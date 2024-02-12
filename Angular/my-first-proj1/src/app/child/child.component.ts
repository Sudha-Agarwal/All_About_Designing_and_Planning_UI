import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()message!:string;
  @Output() messageSent = new EventEmitter<string>();

  sendMessage(){
    const messageToParent = "message from child component";
    this.messageSent.emit(messageToParent);
  }

}
