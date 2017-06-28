import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor() {
		PageScrollConfig.defaultScrollOffset = 85;
	}
	@ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
	@ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;
	@ViewChild(MainviewComponent) mainviewCommponent: MainviewComponent;
}
