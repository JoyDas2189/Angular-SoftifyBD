import { Injectable } from '@angular/core';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { Student } from './pipes/pipe/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [
    {
      name: 'Joy Das',
      id: '201-15-13610',
      gender: 'Male',
      dob: new Date(2001, 9, 27),
      department: 'Cse',
      batch: 55,
      marks: 550,
    },
  ];
  totalMarks: number = 600;
}
