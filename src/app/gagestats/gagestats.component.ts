import { Component, OnInit } from '@angular/core';

import { GagestatsService } from './gagestats.service';

@Component({
  selector: 'app-gagestats',
  templateUrl: './gagestats.component.html',
  styleUrls: ['./gagestats.component.css']
})
export class GagestatsComponent implements OnInit {

  loggedInRole;

  constructor(private gagestatsService: GagestatsService) {  }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');

  }

  showAddStationModal(): void{
    
    this.gagestatsService.addStation();
  }

  bulkUpload(): void{
    console.log("bulk upload clicked, does nothing else @ this time.")
  }

  export(): void{
    console.log("export clicked, does nothing else")
  }

}
