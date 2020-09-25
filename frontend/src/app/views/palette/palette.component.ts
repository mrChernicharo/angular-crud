import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  constructor(
		private headerService: HeaderService
	) {

			this.headerService.headerDataSubject.next({
				title: 'Palette',
				icon: 'brush',
				routeURL: ''
			});
	}
  ngOnInit(): void {
  }

}
