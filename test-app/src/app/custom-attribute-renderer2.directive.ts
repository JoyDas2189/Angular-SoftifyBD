import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeRenderer2]',
})
export class CustomAttributeRenderer2Directive implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#f9f9f9');
    this.renderer.setStyle(this.element.nativeElement, 'maxWidth', '50%');
    this.renderer.setStyle(this.element.nativeElement, 'margin', '20px auto');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '20px');
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', '10px');
    this.renderer.setStyle(this.element.nativeElement, 'boxShadow','0 2px 4px rgba(0, 0, 0, 0.2)');
    this.renderer.setStyle(this.element.nativeElement, 'textAlign', 'center');
  }
}
