import { Component, OnInit } from '@angular/core';
import { NSSService } from 'app/app.service';
import { Router } from "@angular/router";

@Component({
  selector: 'wim-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title:string;
  constructor(private _nssService: NSSService, private router: Router) { }

  ngOnInit() {
    this.title = "National Stream Flow Statistics";
  }
  public toggleSidebar(){
    //should allow sidebar to go in and come back out
    var sidebar = document.getElementById("wimSidebar");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
  }
  public showAbout(){
    this._nssService.setAboutModal(true);
  }
  public showCreate(){
    this._nssService.setCreateModal(true);
  }
  public showLogin(){
    this._nssService.setLoginModal(true);
  }

  public goToSettings() {
    this.router.navigate(['/settings']);
  }

  public goToMain() {
    this.router.navigate([""]);
  }
}
