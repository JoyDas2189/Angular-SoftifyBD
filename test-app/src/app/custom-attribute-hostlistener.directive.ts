import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeHostlistener]',
})
export class CustomAttributeHostlistenerDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '30px auto');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'scale(1.1)'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#cccccc'
    );
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.25s');
  }

  @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '20px auto');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '20px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#f9f9f9'
    );
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.25s');
  }
}
