import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    filterYearList: Array<Number>;
    booleanList: Array<Boolean>;
    finalQueryParam: string;
    previousSelectedObj: any;
    isBrowser:boolean;
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private apiService: ApiService,@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
     }

    ngOnInit(): void {
        this.filterYearList = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
        this.booleanList = [true, false];
        this.finalQueryParam = "";
        this.previousSelectedObj = {};
        this.activatedRoute.queryParamMap.subscribe((res: any) => {
           // if (this.isNotEmptyObject(res.params)) {
                this.finalQueryParam = this.setQueryParam(res.params);
                // if(this.isBrowser){
                //     sessionStorage.setItem('query', this.finalQueryParam);
                // }
                this.apiService.getSpaceXCards(this.finalQueryParam);
           // }

        });
    }

    applyFilter(type, value) {
        //this.updateSelectedButton(type,value);
        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: {
                    [type]: value
                },
                queryParamsHandling: 'merge'
            });


    }

    updateSelectedButton(type, value) {
        if (this.previousSelectedObj[type]) {
            let selectedElement: HTMLElement = this.fetchElement(type, "-" + this.previousSelectedObj[type]);
            this.removeSelectedClass(selectedElement);
        }
        let elementToSelect: HTMLElement = this.fetchElement(type, '-' + value);
        this.addSelectedClass(elementToSelect);

        this.previousSelectedObj[type] = "" + value;
    }

    addSelectedClass(elementToSelect) {
        setTimeout(() => {
            if(elementToSelect){
                elementToSelect.classList.add("selected_button");
            }
        }, 0);
    }

    removeSelectedClass(selectedElement) {
        setTimeout(() => {
            if(selectedElement){
                selectedElement.classList.remove("selected_button");
            }
        }, 0);
    }

    fetchElement(...args) {
        let elemName = "";
        for (let i = 0; i < args.length; i++) {
            elemName += args[i];
        }
        return document.getElementById(elemName);
    }


    setQueryParam(queryParamObj) {
        let queryParam = "";
        for (let key in queryParamObj) {
            if(this.isBrowser){
                this.updateSelectedButton(key, queryParamObj[key]);
            }
            let ampValue = queryParam == "" ? "" : "&";
            queryParam += ampValue + key + "=" + queryParamObj[key];
        }
        return queryParam;
    }


    // isNotEmptyObject(obj) {
    //     return Object.keys(obj).length != 0 && obj.constructor === Object;
    // }

}
