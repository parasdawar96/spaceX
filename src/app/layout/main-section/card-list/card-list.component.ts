import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../service/api.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    spaceCardList:Array<any>;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.spaceCardList=[];
      this.apiService.getSpaceXCards("").subscribe((data:any)=>{
        this.spaceCardList=[...data];
    },err=>{

    });
  }

}
