import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navShown = new EventEmitter<boolean>();
  navOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.navOpened = !this.navOpened;
    this.navShown.emit(this.navOpened);
  }

}
