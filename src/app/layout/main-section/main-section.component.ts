import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
    spaceCardList: Array<any>;
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.spaceCardListObs$.subscribe(data => {
        this.spaceCardList = data;
    });

  }

}
