import { Injectable } from '@angular/core';
import axios from 'axios';
import { StateService } from './state.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private stateService: StateService) { }

    async getSpaceXCards(queryParam) {
        let url = `/api?limit=${this.stateService.responseLimitState}&${queryParam}`;
        this.stateService.isLoadingState = true;  
        console.log("url",url);      
        axios.get(url)
        .then((res)=>{
            this.stateService.spaceCardListState = res.data;
            this.stateService.isLoadingState = false;
        })
        .catch(()=>{
            console.log("error");
            this.stateService.isLoadingState = false;
        })
        
    }

    loadMore() {
        if (this.stateService.responseLimitState == this.stateService.spaceCardListState.length) {
            this.stateService.responseLimitState += 30;
            this.getSpaceXCards(this.stateService.finalQueryParamState);
        }

    }
}
