import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    filterYearList: Array<Number>;
    booleanList: Array<Boolean>;
    constructor() { }

    ngOnInit(): void {
        this.filterYearList=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,20182019,2020];
        this.booleanList=[true,false];
    }

}
