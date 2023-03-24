import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HometabComponent } from './report/hometab/hometab.component';
import {HomeComponent} from './report/home/home.component'

const routes: Routes = [
  // {
  //   path: '', component:HometabComponent
  // },
  { path: 'report', 
  loadChildren: () => import('./report/report.module').
  then((m) => m.ReportModule), 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
