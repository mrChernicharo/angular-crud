import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
	public productsList: Product[];
	displayedColumns = ['id', 'name', 'price']

  constructor(
		private productService: ProductService
	) { }

  ngOnInit(): void {
		this.productService.read().subscribe(prodsData => {
			this.productsList = prodsData;
			console.log(prodsData);
		})
  }

}
