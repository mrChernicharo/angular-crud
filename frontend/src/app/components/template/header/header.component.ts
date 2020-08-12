import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navShown = new EventEmitter<boolean>();
  navOpened: boolean;

  constructor(
  ) { }

  ngOnInit(): void {
    this.navOpened = false;
  }

  showNav() {
    this.navOpened = !this.navOpened;
    this.navShown.emit(this.navOpened);
  }

}
