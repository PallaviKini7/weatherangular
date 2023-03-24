import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { HometabComponent } from './hometab/hometab.component';
import { RecentComponent } from './recent/recent.component';

const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  // {
  //   path: '', component:HometabComponent
  // },
  {
    path: 'favourite', component:FavouriteComponent
  },
  {
    path: 'recent', component:RecentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class ReportRoutingModule { }
