import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    constructor(private http: HttpClient) { }

    getSpaceXCards(queryParam) {
        return this.http.get("http://localhost:3001/v3/launches" + queryParam, httpOptions);
    }
}
