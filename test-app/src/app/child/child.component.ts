import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() message: string = '';
  @Input() image: string = '';

  @Output() messegeEvent = new EventEmitter<string>();
  sendMessege () {
    this.messegeEvent.emit("This is the Messege sent from CHILD to PARENT.");
  }
}
