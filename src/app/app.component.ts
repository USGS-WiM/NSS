import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageScrollConfig } from 'ng2-page-scroll';
import { environment } from '../environments/environment';
import { NSSService } from 'app/app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private _nssServices:NSSService) {
		PageScrollConfig.defaultScrollOffset = 85;
		this._nssServices.setVersion(environment.version);

	}
	@ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
	@ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;
	@ViewChild(MainviewComponent) mainviewCommponent: MainviewComponent;
}
