import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { ApiService } from '../../../service/api.service';

@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    spaceCardList: Array<any>;
    isLoading:boolean;
    constructor(private apiService: ApiService, private stateService: StateService) { }

    ngOnInit(): void {
        this.stateService.spaceCardListObs$.subscribe(data => {
            this.spaceCardList = data;
        });
        this.stateService.isLoadingObs$.subscribe(data => {
            this.isLoading = data;
        })
        let query=sessionStorage.getItem('query');
        query=query?query:"";
        this.apiService.getSpaceXCards(query);
    }

}
