import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRecordComponent} from './view-record/view-record.component';


const routes: Routes = [
  { path: 'displayRecord', component: ViewRecordComponent } ];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
