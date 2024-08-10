import { Component, OnInit } from '@angular/core';
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
      firstName: new FormControl('Joy'),
      lastName: new FormControl('Das'),
      age: new FormControl(23),
      gender: new FormControl('male'),
      email: new FormControl('joy.softifybd@gmail.com'),
      country: new FormControl('bangladesh'),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}
