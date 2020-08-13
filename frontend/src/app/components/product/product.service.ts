import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar'

import { Product } from './product.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, Params, RouterStateSnapshot, RouterState } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	productsList: Product[];


	constructor(
		private snackBar: MatSnackBar,
		private http: HttpClient,
		// private route: ActivatedRoute,
		private router: Router,

	) {}

	showMessage(message: string): void {
		this.snackBar.open(
			message,
			'fechar',
			{
				duration: 3000,
				horizontalPosition: 'right',
				verticalPosition: 'top',
				panelClass: 'mat-snack-message',
			}
		)
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>('http://localhost:3001/products', product);
	}

	read(): Observable<Product[]> {
		const response = this.http.get<Product[]>('http://localhost:3001/products').pipe(tap(data => {
			this.productsList = data;
		}));
		return response;
	}

	readById(id: string): Observable<Product> {
		return this.http.get<Product>(`http://localhost:3001/products/${id}`);
	}

	update(product: Product):  Observable<Product> {
		return this.http.put<Product>(`http://localhost:3001/products/${product.id}`, product);
	}

	delete(id: string): Observable<Product> {
		return this.http.delete<Product>(`http://localhost:3001/products/${id}`);
	}

	getRoute(): string {
		const state: RouterState = this.router.routerState;
		const snapshot: RouterStateSnapshot = state.snapshot;


		// console.log(snapshot.url);
		// console.log(state.snapshot.url);

		return snapshot.url;
	}
}
