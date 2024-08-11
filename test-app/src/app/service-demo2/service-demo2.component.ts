import { Component } from '@angular/core';
import { TestService } from '../testService.service';

@Component({
  selector: 'app-service-demo2',
  templateUrl: './service-demo2.component.html',
  styleUrl: './service-demo2.component.css'
})
export class ServiceDemo2Component {
  title:string = 'Angular';
  onClick() {
    const clickService = new TestService();
    clickService.onClicked(this.title);
  }
}
