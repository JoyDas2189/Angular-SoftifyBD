import { Component } from '@angular/core';
import { TestService } from '../testService.service';

@Component({
  selector: 'app-service-demo2',
  templateUrl: './service-demo2.component.html',
  styleUrl: './service-demo2.component.css',
  providers: [TestService]
})
export class ServiceDemo2Component {
  title:string = 'Angular';

  constructor(private testService: TestService) {}

  onClick() {
    this.testService.onClicked(this.title);
  }
}
