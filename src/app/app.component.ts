﻿import { Component, ViewChild} from '@angular/core';

import { MainPageComponent }from './main/mainpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SharedService } from './services/eventSharing.service';

@Component({
    //moduleId is used to keep templateurl relative path
    moduleId: module.id,
    selector: 'my-app',    
    templateUrl: './app.html',
    providers: [SharedService]
})
export class AppComponent {
    title = 'NSS';    
    @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
    @ViewChild(MainPageComponent) mainpageCommponent: MainPageComponent;
    @ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;   
} 
 
