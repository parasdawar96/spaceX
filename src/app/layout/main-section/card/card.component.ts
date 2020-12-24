import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input("spaceCard") spaceCard: any={};
    constructor() { }

    ngOnInit(): void {
    }
    ngOnChanges(changes) {
        if(changes.spaceCard){
           var a=changes.spaceCard;
        }
      }
}
