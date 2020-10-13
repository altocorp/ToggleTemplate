import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  _toggletrig: boolean;

  toggletrig(){
    this._toggletrig=!this._toggletrig;
    console.log(this._toggletrig)
  }

  constructor() {}
 

  ngOnInit(): void {
    
    
  }
 
}

 // toggleDisplay(){
  //   this.isDisplay = !this.isDisplay;
  //   console.log(this.isDisplay);
  //   this.event.emit(this.isDisplay);
  // }

  // toggleDisplay(){
  //   this.isDisplay = !this.isDisplay;
  //   }


 // (click) = "toggleDisplay()" 
  // [hidden]="isDisplay" or:
  // *ngIf="isDisplay"



  // isDisplay = false;



  // toggleDisplay(){
  //   this.isDisplay = !this.isDisplay;
  // }




  // import { Price } from '../../interface/price';

  // price: Price;

  // this.price = {
  //   price1 : "239.99",
  // }
  // console.log(this.price.price1);
  