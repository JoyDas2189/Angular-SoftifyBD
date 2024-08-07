import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app';

  parentMessege:string = "This is the messege sent from PARENT to CHILD.";
  parentImage:string = "../assets/luffy.jpg";

  recievedMessege:string = '';
  recievingMessege(messege:string) {
    this.recievedMessege = messege;
  } 
}
