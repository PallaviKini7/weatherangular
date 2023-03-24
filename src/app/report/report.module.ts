import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { HometabComponent } from './hometab/hometab.component';
import { HeaderComponent } from './header/header.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentComponent } from './recent/recent.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HometabComponent,
    HeaderComponent,
    FavouriteComponent,
    RecentComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  exports:[
    HometabComponent,
    HeaderComponent,
    FavouriteComponent,
    RecentComponent

  ]
 
})
export class ReportModule { }
