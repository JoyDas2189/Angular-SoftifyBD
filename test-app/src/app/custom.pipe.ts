import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: number, totalMarks: number): number {
    return (value / totalMarks) * 100;
  }
}
