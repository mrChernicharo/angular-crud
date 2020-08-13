import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit, OnDestroy {
	product: Product = {
		name: '',
		price: 0,
	};
	subs: Subscription;

  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService
	) { }

  ngOnInit(): void {
		const id = this.route.snapshot.params['id']
		// const id = this.route.snapshot.paramMap.get('id');

		this.subs = this.productService.readById(id).subscribe(data => {
			this.product = data;
		})
	}

	updateProduct() {
		this.productService.update(this.product).subscribe(data => {
			this.productService.showMessage(`Produto ${data.name.toUpperCase()} atualizado com sucesso! \n R$ ${data.price}`)
			// this.product = data;
		});
		this.router.navigate(['/products']);

	}

	cancel() {
		this.router.navigate(['/products']);
	}

	ngOnDestroy() {
		this.subs.unsubscribe()
	}

}
