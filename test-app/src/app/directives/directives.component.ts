import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  products = [
    { id: 1, name: 'Apple', price: 250, stock: 0,quantity: 2 },
    { id: 2, name: 'Orage', price: 300, stock: 3,quantity: 1 },
    { id: 3, name: 'Banana', price: 40, stock: 1,quantity: 3 },
    { id: 4, name: 'Watermelon', price: 100, stock: 2,quantity: 2 },
  ];
}
