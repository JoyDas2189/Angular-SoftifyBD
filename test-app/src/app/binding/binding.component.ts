import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  title: string = 'BINDING';
  interpolation: string = 'Using String Interpolation';
  propBinding: string = 'https://www.google.co.uk/';
  displayValue: string = '';
  searchValue: string = 'Joy Das';

  displayEventValue(eventData: Event) {
    this.displayValue = (<HTMLInputElement>eventData.target).value;
  }

  changeValue(data: Event) {
    this.searchValue = (<HTMLInputElement>data.target).value;
  }
}
