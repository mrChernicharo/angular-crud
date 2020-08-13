import { Component, OnInit, Output, EventEmitter, OnChanges, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navShown = new EventEmitter<boolean>();
	navOpened: boolean;
	@Input() currentURL: string;

  constructor(
		private productService: ProductService
	) {}

  ngOnInit(): void {
		this.navOpened = false;
		this.currentURL = this.productService.getRoute()
	}


  showNav() {
    this.navOpened = !this.navOpened;
		this.navShown.emit(this.navOpened);
		console.log(this.currentURL)
  }

}
