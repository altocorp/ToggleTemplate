import { Component, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../app/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'nightmode';


  
}
