import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
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
    constructor(private stateService: StateService,private apiService: ApiService, @Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser= isPlatformBrowser(platformId);
     }

    ngOnInit(): void {
        this.stateService.spaceCardListObs$.subscribe(data => {
            this.spaceCardList = data;
        });

        if(isPlatformServer(this.platformId)){
            this.apiService.getSpaceXCards("");
        }
    }

}
