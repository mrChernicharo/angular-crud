import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar'

import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(
		private snackBar: MatSnackBar,
		private http: HttpClient
	) { }

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
		return this.http.post<Product>('http://localhost:3001/products', product)
	}

	read(): Observable<Product[]> {
		return this.http.get<Product[]>('http://localhost:3001/products')
	}
}
