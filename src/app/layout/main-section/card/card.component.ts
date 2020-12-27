import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    land_success:string;
    @Input("spaceCard") spaceCard: any={};
    constructor() { }

    ngOnInit(): void {
        
        if(this.spaceCard?.rocket?.first_stage?.cores[0]?.land_success){
            this.land_success="true";
        }
        else if(this.spaceCard?.rocket?.first_stage?.cores[0]?.land_success==false){
            this.land_success="false";
        }
        else{
            this.land_success="NA";
        }
        
    }
}
