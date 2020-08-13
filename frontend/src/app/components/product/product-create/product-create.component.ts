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
	productsLength: number;

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
		this.productService.read().subscribe(data => {
			this.productsLength = data.length;
		})
		console.log(this.productsLength);
	}

	createProduct() {
		if (this.productsLength >= 15) {
			this.productService.showErrorMessage(`Limite de armazenamento alcançado! Delete algum produto primeiro.`);
			this.router.navigate(['/products']);
		} else {
			this.productService.create(this.product).subscribe(prodData => {
				console.log(prodData)
				this.productService.showMessage(`${prodData.name.toUpperCase()} cadastrado com sucesso!`);
				this.router.navigate(['/products']);
			})
		}
	}

	cancel() {
		this.router.navigate(['/products']);
	}
}
