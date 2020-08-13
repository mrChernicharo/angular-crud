import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

import { Product } from '../product.model';
import { HeaderService } from '../../template/header/header.service';


@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
	product: Product = {
		name: 'produto de teste 2',
		price: 144.79
	}

	constructor(
		private productService: ProductService,
		private router: Router,
		private headerService: HeaderService
	) {

		this.headerService.headerDataSubject.next({
			icon: 'add',
			title: 'Novo produto',
			routeURL: '/products/create'
		});
	}

	ngOnInit(): void {
	}

	createProduct() {
		this.productService.create(this.product).subscribe(prodData => {
			console.log(prodData)
			this.productService.showMessage(`${prodData.name.toUpperCase()} cadastrado com sucesso!`);
			this.router.navigate(['/products']);
		})
	}

	cancel() {
		this.router.navigate(['/products']);
	}
}
