import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spaceX';
  isLoading:boolean;
  constructor(private apiService:ApiService,private stateService: StateService,private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.stateService.isLoadingObs$.subscribe(data => {
        this.isLoading = data;
        this.cdr.detectChanges();
    });
  }
}
