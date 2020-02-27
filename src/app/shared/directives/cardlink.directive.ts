import { Directive, ElementRef, Input, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cardlink]'
})
export class CardlinkDirective implements OnInit {

  @Input() showDescription: boolean;


  @HostListener('mouseenter') onMouseenter() {
    this.hover(true);
    this.showDescription = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
    this.showDescription = false;
  }

  @HostListener('click') onClick() {
    console.log('click');
  }

  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    if (this.showDescription) {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', '18px');
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', '#590925');
  }

  hover(color: boolean): void {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#5533ff');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', '#590925');
    }
  }
}
