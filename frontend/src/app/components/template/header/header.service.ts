import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
	providedIn: 'root'
})
export class HeaderService implements OnInit {

	currentStatus: HeaderData = {
		title: 'Home',
		icon: 'home',
		routeURL: ''
	};

	public headerDataSubject = new BehaviorSubject<HeaderData>({
		title: 'Home',
		icon: 'home',
		routeURL: ''
	});


	constructor() {
		this.headerDataSubject.subscribe(data => {
			this.currentStatus = data;
		})
	}

	ngOnInit() {
	}
}
