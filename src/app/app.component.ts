import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {MainviewComponent} from './mainview/mainview.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app',
  //encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <wim-navbar></wim-navbar>
    <wim-sidebar></wim-sidebar>
    <wim-mainview></wim-mainview>    
  `
})
export class AppComponent {
 @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
 @ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;
 @ViewChild(MainviewComponent) mainviewCommponent: MainviewComponent;
   
  //constructor() {}

  //ngOnInit() {}

}