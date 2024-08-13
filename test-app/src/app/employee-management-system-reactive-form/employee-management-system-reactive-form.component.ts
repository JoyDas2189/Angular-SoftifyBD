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
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      address: this.fb.group({
        area: ['', Validators.required],
        postal: ['', Validators.required],
        city: ['', Validators.required],
      }),
      skills: new FormArray([new FormControl('', Validators.required)]),
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
  editEmployee() {
    this.reactiveForm.patchValue(this.submittedData);
    this.submitted = false;
  }
  clearForm() {
    this.reactiveForm.reset({
      name: '',
      age: '',
      gender: '',
      email: '',
      position: '',
      address: {
        area: '',
        postal: '',
        city: '',
      },
      skills: this.fb.array([]),
    });
    this.submittedData = '';
    this.submitted = false;
  }
  onSubmit() {
    if (this.reactiveForm.valid) {
      this.submittedData = this.reactiveForm.value;
      this.submitted = true;
    }
  }
}
