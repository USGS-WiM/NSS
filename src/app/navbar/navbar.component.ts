//------------------------------------------------------------------------------
//----- Component ---------------------------------------------------------------
//------------------------------------------------------------------------------

//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+

// copyright:   2016 WiM - USGS

//    authors:  Jeremy K. Newson USGS WiM
//              Tonia Roddick USGS-WiM
// 
//   purpose:  
//          
//discussion:


//Comments
//09.27.2016 jkn - Created

//Import
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
//import { CONFIG } from '../shared/config';


@Component({
    //moduleId is used to keep templateurl relative path
    moduleId: module.id,
    styleUrls:['./navbar.css'],
    selector: 'wim-navbar',
    templateUrl: './navbar.html'
})
export class NavbarComponent implements OnInit {
    //Events
    //-+-+-+-+-+-+-+-+-+-+-+-
    @Output() onToggleSidebar = new EventEmitter<boolean>();
    //Properties
    //-+-+-+-+-+-+-+-+-+-+-+-
    public title: string;

    //Constructor
    //-+-+-+-+-+-+-+-+-+-+-+-
    public constructor() {        
    }
    //Methods
    //-+-+-+-+-+-+-+-+-+-+-+-
    public toggleSidebar(): void {
        console.log("Child: Togglesidebar emit");
        this.onToggleSidebar.emit();
    }

    //Implemented Methods
    //-+-+-+-+-+-+-+-+-+-+-+-
    public ngOnInit() {
        this.title = "NSS";
    }
    //Helper Methods
    //-+-+-+-+-+-+-+-+-+-+-+-
}//end class