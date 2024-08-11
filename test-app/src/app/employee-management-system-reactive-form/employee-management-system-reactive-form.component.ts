import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormControlName,
  Validators,
} from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-management-system-reactive-form',
  templateUrl: './employee-management-system-reactive-form.component.html',
  styleUrl: './employee-management-system-reactive-form.component.css',
})
export class EmployeeManagementSystemReactiveFormComponent {
  reactiveForm: FormGroup;
  submittedData: any;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: ['joy', Validators.required],
      age: ['23', [Validators.required, Validators.min(1)]],
      gender: ['male', Validators.required],
      email: [
        'joy.softifybd@gmail.com',
        [Validators.required, Validators.email],
      ],
      position: ['Intern', Validators.required],
      address: this.fb.group({
        area: ['Sutrapur', Validators.required],
        postal: ['1100', Validators.required],
        city: ['Dhaka', Validators.required],
      }),
      skills: new FormArray([
        new FormControl('Angular', Validators.required),
      ]),
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }


  onSubmit() {
    if (this.reactiveForm.valid) {
      this.submittedData = this.reactiveForm.value;
      this.submitted = true;
    }
  }
}
