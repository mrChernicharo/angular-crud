import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
	product: Product = {
		name: '',
		price: 0
	}
	id: string = this.route.snapshot.params['id']


  constructor(
		private service: ProductService,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit(): void {
		this.service.readById(this.id).subscribe(data => {
			this.product = data;
		});
	}

	deleteProduct() {
		this.service.delete(this.id).subscribe(data => {
			this.service.showMessage(`Produto ${this.product.id}, ${this.product.name.toUpperCase()} deletado com sucesso`)

		});

		this.router.navigate(['/products']);

	}

	cancel() {
		this.router.navigate(['/products']);
	}

}
