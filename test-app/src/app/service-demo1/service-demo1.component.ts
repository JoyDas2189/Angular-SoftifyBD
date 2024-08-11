import { Component } from '@angular/core';
import { TestService } from '../testService.service';

@Component({
  selector: 'app-service-demo1',
  templateUrl: './service-demo1.component.html',
  styleUrl: './service-demo1.component.css',
  providers: [TestService],
})
export class ServiceDemo1Component {
  title: string = 'TypeScript';

  constructor(private testService: TestService) {}

  onClick() {
    this.testService.onClicked(this.title);
  }
}
