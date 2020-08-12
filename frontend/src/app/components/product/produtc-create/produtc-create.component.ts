import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produtc-create',
  templateUrl: './produtc-create.component.html',
  styleUrls: ['./produtc-create.component.css']
})
export class ProdutcCreateComponent implements OnInit {

  constructor(
		private productService: ProductService,
		private router: Router
	) { }

  ngOnInit(): void {
  }

	createProduct() {
		this.productService.showMessage('produto cadastrado com sucesso!')
	}

	cancel() {
		this.router.navigate(['../'])
	}
}
