import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomAttributeHostbinder]',
})
export class CustomAttributeHostbinderDirective {
  constructor() {}

  defaultColor: string = '#f9f9f9';
  defaultMargin: string = '20px auto';
  defaultPadding: string = '20px 20px';
  defaultTransition: string = '0.25s';
  defaultTransform: string = 'scale(1)';
  hoverColor: string = '#cccccc';
  hoverMargin: string = '30px auto';
  hoverPadding: string = '30px 30px';
  hoverTransition: string = '0.25s';
  hoverTransform: string = 'scale(1.1)';

  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  @HostBinding('style.margin') margin: string = this.defaultMargin;
  @HostBinding('style.padding') padding: string = this.defaultPadding;
  @HostBinding('style.transition') transition: string = this.defaultTransition;
  @HostBinding('style.transform') transform: string = this.defaultTransform;

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.hoverColor;
    this.margin = this.hoverMargin;
    this.padding = this.hoverPadding;
    this.transition = this.defaultTransition;
    this.transform = this.hoverTransform;
  }
  @HostListener('mouseleave') onmouseout() {
    this.backgroundColor = this.defaultColor;
    this.margin = this.defaultMargin;
    this.padding = this.defaultPadding;
    this.transition = this.defaultTransition;
    this.transform = this.defaultTransform;
  }
}
