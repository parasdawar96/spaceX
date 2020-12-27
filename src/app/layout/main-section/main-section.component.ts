import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
    isLoading:boolean;
  constructor(private apiService:ApiService,private stateService: StateService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
   
  }

  onScroll() {
    this.apiService.loadMore();
  }

}
