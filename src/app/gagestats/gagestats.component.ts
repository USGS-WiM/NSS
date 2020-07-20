import { Component, OnInit } from '@angular/core';

import { GagestatsService } from './gagestats.service';
import { NSSService } from 'app/shared/services/app.service';

@Component({
  selector: 'app-gagestats',
  templateUrl: './gagestats.component.html',
  styleUrls: ['./gagestats.component.css']
})
export class GagestatsComponent implements OnInit {

  loggedInRole;

  constructor(private gagestatsService: GagestatsService, private nssService: NSSService) {  }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');

  }

  showAddStationModal(): void{
    
    this.nssService.setAddStationModal(true);
  }

  bulkUpload(): void{
    console.log("bulk upload clicked, does nothing else @ this time.")
  }

  export(): void{
    console.log("export clicked, does nothing else")
  }

}
