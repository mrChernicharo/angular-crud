import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class MyForDirective implements OnInit {
  @Input('myForDentro-de') numbers: number[];
  // @Input('myForUsando') texto: string;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {

  }

  ngOnInit(): void {
    for (let num of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: num });
    }
    console.log(this.numbers)
    // console.log(this.texto)
  }

}
