import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayrecordsComponent } from './displayrecords/displayrecords.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewRecordComponent } from './view-record/view-record.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DisplayrecordsComponent,
    MenubarComponent,
    ActionBarComponent,
    ViewRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
   MatButtonModule,
   MatMenuModule,
   MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
