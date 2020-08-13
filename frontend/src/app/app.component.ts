import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'frontend';
  name = 'Maria';
	showNav: boolean;

	constructor() {	}

  openNav(event: boolean) {
    this.showNav = event;
	}
}
