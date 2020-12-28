import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private stateService: StateService, private http: HttpClient) { }

    async getSpaceXCards(queryParam) {
        let url = `/api?limit=${this.stateService.responseLimitState}&${queryParam}`;
        this.stateService.isLoadingState = true;
        this.fetchData(url).subscribe(
            (res: any) => {
                this.stateService.spaceCardListState = res;
                this.stateService.isLoadingState = false;
            }, (err) => {
                console.log(err);
            }
        );
    }

    fetchData(url) {
        return this.http.get(url);
    }

    loadMore() {
        if (this.stateService.responseLimitState == this.stateService.spaceCardListState.length) {
            this.stateService.responseLimitState += 30;
            this.getSpaceXCards(this.stateService.finalQueryParamState);
        }

    }
}
