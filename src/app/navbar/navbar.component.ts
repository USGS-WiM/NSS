import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wim-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title:string;
  constructor() { }

  ngOnInit() {
    this.title = "National Stream Flow Statistics";
  }
  public toggleSidebar(){
    //should allow sidebar to go in and come back out
  }
}
