import { Component, OnInit, Input} from '@angular/core';
// import { valeurs } from '../../interface/index';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  private _trigger: boolean;
  priceLeft: string;

  get trigger(): boolean{
    return this._trigger;
  }

  @Input()

  set trigger(value: boolean){
    this._trigger= value;
    if(value == true){
      this.priceLeft = "19.99";
    } else {
      this.priceLeft = "199.99";
    }
  }

  constructor() { 
  }


  ngOnInit(): void {
   
  }

  


// valeursList = valeurs;
// @Input('userDisplay') isDisplay : boolean;
// receiveMessage($event){
//      this.isDisplay=$event;
//   }



  
}

