import { Component, ViewChild, OnInit } from '@angular/core';
// import { NavbarComponent } from './navbar/navbar.component';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageScrollConfig } from 'ng2-page-scroll';
import { environment } from '../environments/environment';
import { NSSService } from '../app/shared/services/app.service';
import { AuthService } from '../app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public loggedInRole = '';
  constructor(private _nssService: NSSService, private router: Router, private _authService: AuthService) {
    PageScrollConfig.defaultScrollOffset = 85;
    this._nssService.setVersion(environment.version);
  }

  ngOnInit() {
      this._authService.loggedInRole().subscribe(role => {
        if (role === 'Administrator' || role === 'Manager') { this.loggedInRole = role; }
      });
      /*this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
    };*/
  }
  // @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
  @ViewChild(SidebarComponent) sidebarComponent: SidebarComponent;
  @ViewChild(MainviewComponent) mainviewCommponent: MainviewComponent;
  public showAbout() {
    this._nssService.setAboutModal(true);
  }
  public showCreate() {
    this._nssService.setCreateModal(true);
  }
  public showLogin() {
    this._nssService.setLoginModal(true);
    this.router.navigate(['/login']);
  }

  public goToSettings() {
    this.router.navigate(['/settings']);
  }

  public goToMain() {
    this.router.navigate(['']);
  }
}
