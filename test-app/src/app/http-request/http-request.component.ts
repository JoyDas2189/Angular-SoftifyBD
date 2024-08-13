import { Component } from '@angular/core';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css'
})
export class HttpRequestComponent {
  onProductCreate(products: {pName:string, pDescription:string, pPrice:number}) {
    console.log(products);
    
  }
}
