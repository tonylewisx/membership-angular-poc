import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DisplayrecordsComponent, PeriodicElement } from '../displayrecords/displayrecords.component';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.component.html',
  styleUrls: ['./view-record.component.css']
})

//const dc = DisplayrecordsComponent;

export class ViewRecordComponent implements OnInit {
  
 // private vRow:PeriodicElement= {};
 
 // this.vRow = DisplayrecordsComponent.viewRow();

  constructor() { }
  

  ngOnInit(): void {
  }

}
