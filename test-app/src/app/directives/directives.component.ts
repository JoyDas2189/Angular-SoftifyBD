import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  products = [
    {id:1, name: "Apple", price: 250, quantity: 2},
    {id:2, name: "Orage", price: 300, quantity: 1},
    {id:1, name: "Banana", price: 40, quantity: 3},
  ]
}
