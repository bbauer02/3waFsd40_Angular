import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
      this.setBorder('transparent');
  }

  // Mode initialisation strictPropertyInitialisation = true dans le tsConfig.json
  // Par conséquent il faut initialiser borderColor. 
  @Input('appBorderCard') borderColor: string  = "" ;

  @HostListener('mouseenter') onMouseEnter() {
      this.setBorder(this.borderColor || "#A33EA1");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('transparent');
}

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
