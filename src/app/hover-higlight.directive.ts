import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appHoverHiglight]'
})
export class HoverHiglightDirective {
  @HostBinding('style.color') textColor: string;
  @Input('appHoverHiglight') highlightColor: { background: string, text: string }

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  // ngOnInit(): void {
  //   this.render.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  // }

  @HostListener("mouseover") mouseMasuk(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor.background);
    this.textColor = this.highlightColor.text;
  }
  @HostListener("mouseleave") mouseKeluar(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.textColor = 'black'
  }

}


