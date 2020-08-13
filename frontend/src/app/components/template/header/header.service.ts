import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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

	// private headerDataSubject = new Subject<HeaderData>()

	constructor() { }

	get headerData(): HeaderData {
		// console.log(this.headerDataSubject.value)
		return this.headerDataSubject.getValue()
	}

	set headerData(data: HeaderData) {
		this.headerDataSubject.next(data);
	}
}
