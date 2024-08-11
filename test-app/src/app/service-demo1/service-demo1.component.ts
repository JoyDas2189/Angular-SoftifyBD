import { Component } from '@angular/core';
import { TestService } from '../testService.service';

@Component({
  selector: 'app-service-demo1',
  templateUrl: './service-demo1.component.html',
  styleUrl: './service-demo1.component.css',
})
export class ServiceDemo1Component {
  title: string = 'TypeScript';

  onClick() {
    const clickService = new TestService();
    clickService.onClicked(this.title);
  }
}
