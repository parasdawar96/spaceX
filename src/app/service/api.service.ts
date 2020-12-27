import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private stateService: StateService) { }

    async getSpaceXCards(queryParam) {
        let url = `https://api.spacexdata.com/v3/launches?limit=${this.stateService.responseLimitState}&${queryParam}`;
        this.stateService.isLoadingState = true;
        const res = await fetch(url);
        const data = await res.json();
        this.stateService.isLoadingState = false;
        if (data) {
            this.stateService.spaceCardListState = data;
        } else {
            console.log("error");
        }
    }

    loadMore() {
        if (this.stateService.responseLimitState == this.stateService.spaceCardListState.length) {
            this.stateService.responseLimitState += 30;
            this.getSpaceXCards(this.stateService.finalQueryParamState);
        }

    }
}
