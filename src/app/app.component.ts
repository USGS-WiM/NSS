import { Component, ViewChild } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {MainviewComponent} from './mainview/mainview.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
   @ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;
   @ViewChild(MainviewComponent) mainviewCommponent: MainviewComponent;
}
