////------------------------------------------------------------------------------
////----- Component ---------------------------------------------------------------
////------------------------------------------------------------------------------

////-------1---------2---------3---------4---------5---------6---------7---------8
////       01234567890123456789012345678901234567890123456789012345678901234567890
////-------+---------+---------+---------+---------+---------+---------+---------+

//// copyright:   2016 WiM - USGS

////    authors:  Tonia Roddick USGS WiM
////             
//// 
////   purpose:  
////          
////discussion:


////Comments
////09.27.2016 jkn - Created

////Import
//import { Component, OnInit, Input } from '@angular/core';
//import {RegionService} from '../services/regions.service';
//import { IRegion } from '../shared/region';
//import { CommonModule, NgFor } from '@angular/common';
////import { ActivatedRoute, Router, Params } from '@angular/router';

////import {IResourceMethod, IURI } from '../shared/resource';


//@Component({
//    //moduleId is used to keep templateurl relative path
//    moduleId: module.id,
//    styleUrls: ['./sidebarContent.css'],
//    selector: 'nss-sidebarbody',
//    template: `
//            <div>
//                <select name="regions" ngModel (ngModelChange)="onSelect($event)">
//                    <option value="" disabled>Choose a Region</option>
//                    <option *ngFor="let R of regions" [ngValue]="R">
//                        {{ R.Name }}
//                    </option>
//                </select>                
//            </div>
//            `,
//    providers: [RegionService]
//    //templateUrl: './sidebarContent.html'
//})

//export class SidebarContentComponent implements OnInit {
//   // @Input() content: Array<IResourceMethod>;
//    //Properties
//    public regions: IRegion[];
//    public isOpen: boolean;
//   // public selectedURI: IURI;
//   // private _router: Router;

//    //Constructor
//    public constructor() { }

      
    
//    //Implemented Methods
//    public ngOnInit():void {
//    }
   
//}//end class