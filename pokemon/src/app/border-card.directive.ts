import { Directive, ElementRef, HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  @Input('appBorderCard') borderColor: string | undefined;

  constructor(private el: ElementRef) {
    this.setHeight(200);
    this.setBorder('#f5f5f5');

   }

   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || '#009688');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
   }

   setHeight(height:number){
    this.el.nativeElement.style.height = `${height}px`;
   }

   
   setBorder(color:string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
   }

}
