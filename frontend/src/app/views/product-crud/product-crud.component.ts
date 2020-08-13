import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { HeaderData } from 'src/app/components/template/header/header-data.model';

@Component({
	selector: 'app-product-crud',
	templateUrl: './product-crud.component.html',
	styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
	// status: HeaderData;

	constructor(
		private router: Router,
		private headerService: HeaderService
	) {
		// this.headerService.headerData = {
		// 	title: 'Cadastro de Produtos',
		// 	icon: 'storefront',
		// 	routeURL: '/products'
		// }
		// this.headerService.headerDataSubject.subscribe(data => {
		// 	this.headerService.currentStatus = data;
		// })
		// this.status = this.headerService.currentStatus
			this.headerService.headerDataSubject.next({
				title: 'Products',
				icon: 'storefront',
				routeURL: '/products'
			});
	}

	ngOnInit(): void {
	}

	navigateToCreateProduct() {
		this.router.navigate(['/products/create']);
	}

}
