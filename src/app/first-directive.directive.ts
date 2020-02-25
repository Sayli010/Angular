import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective  implements OnInit{


  constructor(private elRef: ElementRef) { }
  ngOnInit(){
    this.elRef.nativeElement.style.color = 'orange';
  }
}
