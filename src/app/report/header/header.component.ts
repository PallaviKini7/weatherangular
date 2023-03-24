import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/service/apidata.service';
import { HomeserviceService } from './../../service/homeservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  constructor()
  {

  }
  
  search:string=''

  ngOnInit()
  {
    
  }
  submitdata()
  {
    console.log(this.search);
  }


}
