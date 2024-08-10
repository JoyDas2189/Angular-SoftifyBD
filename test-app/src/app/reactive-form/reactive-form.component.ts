import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      nameDetails: new FormGroup({
        firstName: new FormControl('Joy', Validators.required),
        lastName: new FormControl('Das', Validators.required),
      }),
      age: new FormControl(23, Validators.required),
      gender: new FormControl('male', Validators.required),
      email: new FormControl('joy.softifybd@gmail.com', [Validators.required, Validators.email]),
      country: new FormControl('bangladesh', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
