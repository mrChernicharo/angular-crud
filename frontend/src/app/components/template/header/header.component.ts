import { Component, OnInit, Output, EventEmitter, OnChanges, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navShown = new EventEmitter<boolean>();
	navOpened: boolean;

  constructor(
		private productService: ProductService,
		private headerService: HeaderService
	) {}

  ngOnInit(): void {
		this.navOpened = false;
	}


  showNav() {
    this.navOpened = !this.navOpened;
		this.navShown.emit(this.navOpened);
	}

	get title() {
		const title = this.headerService.headerData.title;
		return title;
	}
	get icon() {
		return this.headerService.headerData.icon;
	}
	get routeURL() {
		const url = this.headerService.headerData.routeURL;
		// console.log(url);
		return url;
	}

}
