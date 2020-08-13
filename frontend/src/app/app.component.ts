import { Component, OnChanges } from '@angular/core';
import { ProductService } from './components/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnChanges {
  title = 'frontend';
  name = 'Maria';
	showNav: boolean;
	currentRoute: string = '';

	constructor(
		private service: ProductService
	) {	}

  openNav(event: boolean) {
    this.showNav = event;
	}

	ngOnChanges() {
		this.getUrl()
	}

	getUrl() {
		this.currentRoute = this.service.getRoute()
		console.log(this.currentRoute)
	}
}
