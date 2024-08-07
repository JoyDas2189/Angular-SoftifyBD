import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  interpolation: string = 'Using String Interpolation';
  propBinding: string = 'https://www.google.co.uk/';
  searchValue: string = 'Joy';

  changesearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
