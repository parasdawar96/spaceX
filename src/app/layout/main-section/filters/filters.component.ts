import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    filterYearList: Array<Number>;
    booleanList: Array<Boolean>;
    finalQueryParam:string;
    constructor(private activatedRoute: ActivatedRoute,private router: Router,private apiService:ApiService) { }

    ngOnInit(): void {
        this.filterYearList=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
        this.booleanList=[true,false];
        this.finalQueryParam="";
        this.activatedRoute.queryParamMap.subscribe((res: any) => {
             if(this.isNotEmptyObject(res.params)){
                this.finalQueryParam = this.setQueryParam(res.params);
                sessionStorage.setItem('query', this.finalQueryParam);
                this.apiService.getSpaceXCards(this.finalQueryParam);
            }
         
        });
    }

    applyFilter(type,value){

        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: {  
                    [type]:value
                 },
                queryParamsHandling: 'merge'
            });

           
    }


    setQueryParam(queryParamObj) {
        let queryParam = "";
        for (let key in queryParamObj) {
            let ampValue = queryParam == "" ? "" : "&";
            queryParam += ampValue + key + "=" + queryParamObj[key];
        }
        return queryParam;
    }


    isNotEmptyObject(obj){
        return Object.keys(obj).length != 0 && obj.constructor === Object;
    }

}
