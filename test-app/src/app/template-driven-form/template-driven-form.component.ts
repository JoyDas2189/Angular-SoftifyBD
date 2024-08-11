import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  submitted = false;
  submittedData = {
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    email: '',
    country: '',
  };
firstname: any;
  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.submittedData = form.value;
      console.log('Form Submitted!', form.value);
    }
  }
}
