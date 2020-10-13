import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],

})
export class RightComponent implements OnInit {

  private _trigger: boolean;
  priceRight: string;

  get trigger(): boolean{
    return this._trigger;
  }

  @Input()

  set trigger(value: boolean){
    this._trigger= value;
    if(value == true){
      this.priceRight = "39.99";
    } else {
      this.priceRight = "399.99";
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }



}


// private data: SharedService

// message:string;

// this.data.currentMessage.subscribe(message => this.message = message);