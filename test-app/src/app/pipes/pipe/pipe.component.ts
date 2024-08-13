import { StudentsService } from './../../students.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
  providers: [StudentsService],
})
export class PipeComponent implements OnInit {
  students: Student[];
  totalMarks: number;

  constructor(private studentService: StudentsService) {}
  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }
}
