import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

	private headerDataSubject = new BehaviorSubject<HeaderData>({
		title: 'Home',
		icon: 'home',
		routeURL: ''
	})

	constructor() { }

	get headerData(): HeaderData {
		return this.headerDataSubject.value
	}

	set headerData(data: HeaderData) {
		this.headerDataSubject.next(data);
	}
}
