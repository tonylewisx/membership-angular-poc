import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayrecordsComponent } from './displayrecords/displayrecords.component';
import { ViewRecordComponent} from './view-record/view-record.component';


const routes: Routes = [
  { path: 'displayRecord', component: ViewRecordComponent } ,
  { path: 'displayRecords', component: DisplayrecordsComponent }
];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
