import { Component, OnInit } from '@angular/core';
import { NSSService } from 'app/app.service';

@Component({
  selector: 'wim-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title:string;
  constructor(private _nssService: NSSService) { }

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
}
