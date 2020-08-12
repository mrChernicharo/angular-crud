import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

import { Product } from '../product.model';


@Component({
  selector: 'app-produtc-create',
  templateUrl: './produtc-create.component.html',
  styleUrls: ['./produtc-create.component.css']
})
export class ProdutcCreateComponent implements OnInit {
	product: Product = {
		name: 'produto de teste 2',
		price: 144.79
	}

  constructor(
		private productService: ProductService,
		private router: Router
	) { }

  ngOnInit(): void {
  }

	createProduct() {
		this.productService.create(this.product).subscribe(prodData => {
			console.log(prodData)
			this.productService.showMessage('produto cadastrado com sucesso!');
			this.router.navigate(['/products']);
		})
	}

	cancel() {
		this.router.navigate(['/products']);
	}
}
