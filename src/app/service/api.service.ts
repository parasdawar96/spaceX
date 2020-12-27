import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StateService } from './state.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Accept": "application/json",
        "NoAuth": "True"
    })
};


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private stateService: StateService) { }

    async getSpaceXCards(queryParam) {
        let url = "https://api.spacexdata.com/v3/launches?limit=30&" + queryParam;
        this.stateService.isLoadingState=true;
        const res = await fetch(url);
        const data = await res.json();
        this.stateService.isLoadingState=false;
        if(data){
            this.stateService.spaceCardListState = data;
            
        }else{
            console.log("error");
        }
      
        // this.fetchData(url).subscribe((data: any) => {
        //     this.stateService.spaceCardListState = data;
        //     this.stateService.isLoadingState=false;
        // }, err => {
        //     console.log(err);
        //     this.stateService.isLoadingState=false;
        // });
    }

    fetchData(url) {
        return this.http.get(url, httpOptions);
    }
}
