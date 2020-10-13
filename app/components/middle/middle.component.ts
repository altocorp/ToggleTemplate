import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  private _trigger: boolean;
  priceMiddle: string;

  get trigger(): boolean{
    return this._trigger;
  }

  @Input()

  set trigger(value: boolean){
    this._trigger= value;
    if(value == true){
      this.priceMiddle = "24.99";
    } else {
      this.priceMiddle = "249.99";
    }
  }

  constructor() { }


  ngOnInit(): void {

  }

}
