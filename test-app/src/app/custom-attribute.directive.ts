import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customDirective]',
})
export class CustomAttributeDirective implements OnInit {
  constructor(private element: ElementRef) {
    this.element = element;
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#f9f9f9';
    this.element.nativeElement.style.maxWidth = '50%';
    this.element.nativeElement.style.margin = '20px auto';
    this.element.nativeElement.style.padding = '20px';
    this.element.nativeElement.style.borderRadius = '10px';
    this.element.nativeElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    this.element.nativeElement.style.textAlign = 'center';
  }
}
