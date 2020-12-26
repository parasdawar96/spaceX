import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input("buttonName") buttonName: string;
    @Input("buttonClass") buttonClass:string;
    @Input('buttonType') buttonType:string="";
    @Output() onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }
    onClickbutton(event) {
        this.onClick.emit(event);
    }
}
