import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  @Input() displayNav: boolean; 
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.opened = !this.opened
    // }, 2000)

  }

  ngOnChanges() {
    this.opened = this.displayNav
    console.log(`diplayNav -> ${this.displayNav}`)
  }

}
