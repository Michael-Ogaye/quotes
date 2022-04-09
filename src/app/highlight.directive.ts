import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elem:ElementRef) { }
ngOnInit(): void {
    this.elem.nativeElement.style.backgroundColor='green';
}


}
