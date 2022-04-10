import { Directive,ElementRef,OnInit,Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elem:ElementRef, private renderer:Renderer2) { }

@Input() set display(csOb:object){
  let entry= Object.entries(csOb);
  console.log(entry)
  for(let ent of entry){
    if(ent[1]){
      this.renderer.addClass(this.elem.nativeElement,ent[0])
    }
  }
}

ngOnInit(): void {
    
}


}
