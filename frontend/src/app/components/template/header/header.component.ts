import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderService } from './header.service';
import { HeaderData } from './header-data.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() navShown = new EventEmitter<boolean>();
	navOpened: boolean;
	status: HeaderData

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit(): void {
		this.navOpened = false;
		this.headerService.headerDataSubject.subscribe(data => {
			this.status = data;
			console.log(data);
		})
		this.status = this.headerService.currentStatus
	}

	showNav() {
		this.navOpened = !this.navOpened;
		this.navShown.emit(this.navOpened);

	}

}
