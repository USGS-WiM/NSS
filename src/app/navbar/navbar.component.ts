//   copyright:   2016 WiM - USGS
//   authors:  Tonia Roddick USGS-WiM
// 
//   purpose:  Navbar of the application
//          
//   Comments
//12.06.2016 tr - Created
//

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wim-navbar',
  styleUrls: [
    './navbar.component.css'
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public title:string;
  constructor() {}

  ngOnInit() {
    this.title = "National Stream Flow Statistics";  
  }
  
}
