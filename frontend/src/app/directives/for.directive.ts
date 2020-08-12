import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {
  @Input('myForEm') numbers: number[]; 
  @Input('myForUsando') texto: string;

  constructor() { 
    console.log('myFor')
  }

  ngOnInit(): void {
    console.log(this.numbers)
    console.log(this.texto)
  }

}
