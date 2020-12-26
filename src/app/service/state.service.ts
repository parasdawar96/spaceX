import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    protected _spaceCardList: Array<object>;
    protected _isLoading: boolean;


    public spaceCardListObs$: BehaviorSubject<Array<object>>;
    public isLoadingObs$: BehaviorSubject<boolean>;


    constructor() {
        this.initialize();
    }

    initialize() {
        this._spaceCardList = [];
        this._isLoading = false;


        this.spaceCardListObs$ = new BehaviorSubject<Array<object>>(this._spaceCardList);
        this.isLoadingObs$ = new BehaviorSubject<boolean>(this._isLoading);

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
}
