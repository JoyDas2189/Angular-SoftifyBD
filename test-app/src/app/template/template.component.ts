import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  template: `<div class="template">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
      consequatur at facilis quo ratione similique architecto eos dignissimos
      aspernatur sit? Similique laborum assumenda saepe dolorem atque nulla
      inventore! Sapiente, vero?
    </p>
  </div>`,
  styles: `
  .template {
      padding: 20px;
      margin: 20px auto;
      max-width: 600px;
      background-color: #f4f4f4;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
    }
    
    .template p {
      color: #333;
      font-size: 16px;
      margin: 0;
    }
    `,
})
export class TemplateComponent {}
