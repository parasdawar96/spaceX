import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { ApiService } from '../../../service/api.service';

@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
    spaceCardList: Array<any>;
    isLoading: boolean;
    isBrowser: boolean;
    constructor(private stateService: StateService,private apiService: ApiService,@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser= isPlatformBrowser(platformId);
     }

    ngOnInit(): void {
        this.stateService.spaceCardListObs$.subscribe(data => {
            this.spaceCardList = data;
        });

        if(typeof window !== 'undefined' && window !== null){
            if(window.location.search==""){
                this.apiService.getSpaceXCards("");
            } 
        }
        else{
            this.apiService.getSpaceXCards("");
        }

    }

}
