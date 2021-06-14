import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  view(){
    console.log(window.location.href);
    console.log("hello there");
    window.location.href = './view-record/view-record.component.html';
   //window.location.href = "https://www.google.com";
  }

  getcbrows(){
    
  }

}
