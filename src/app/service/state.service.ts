import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    protected _spaceCardList: Array<object>;
    protected _isLoading: boolean;
    protected _responseLimit:number;
    protected _finalQueryParam:string;


    public spaceCardListObs$: BehaviorSubject<Array<object>>;
    public isLoadingObs$: BehaviorSubject<boolean>;
    protected responseLimitObs$:BehaviorSubject<number>;
    protected finalQueryParamObs$:BehaviorSubject<string>;


    constructor() {
        this.initialize();
    }

    initialize() {
        this._spaceCardList = [];
        this._isLoading = false;
        this._responseLimit=30;
        this._finalQueryParam="";

        this.spaceCardListObs$ = new BehaviorSubject<Array<object>>(this._spaceCardList);
        this.isLoadingObs$ = new BehaviorSubject<boolean>(this._isLoading);
        this.responseLimitObs$=new BehaviorSubject<number>(this._responseLimit);
        this.finalQueryParamObs$= new BehaviorSubject<string>(this._finalQueryParam);

    }

    public get spaceCardListState() {
        return this._spaceCardList;
    }

    public set spaceCardListState(response) {
        this._spaceCardList = response;
        this.spaceCardListObs$.next(this._spaceCardList);
    }

    public get isLoadingState() {
        return this._isLoading;
    }

    public set isLoadingState(response) {
        this._isLoading = response;
        this.isLoadingObs$.next(this._isLoading);
    }

    public get responseLimitState() {
        return this._responseLimit;
    }

    public set responseLimitState(response) {
        this._responseLimit = response;
        this.responseLimitObs$.next(this._responseLimit);
    }
    public get finalQueryParamState() {
        return this._finalQueryParam;
    }

    public set finalQueryParamState(response) {
        this._finalQueryParam = response;
        this.finalQueryParamObs$.next(this._finalQueryParam);
    }
    
}
