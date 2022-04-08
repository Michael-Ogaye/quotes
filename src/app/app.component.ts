import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-project';

  constructor(){
    this.log();
  }

  allQuotes:Quote[]=[
    new Quote(
      'medicine','Michael','If life were predictable it would cease to be life, and be without flavor.',0,0,'2022-04-08'
    ),
    new Quote(
      'Justice','Justus','If life were predictable it would cease to be life, and be without flavor.',0,0,'2022-04-08'
    ),
    new Quote(
      'knowlege','Paul','If life were predictable it would cease to be life, and be without flavor.',0,0,'2022-04-08'
    )
    

  ]
log(){
  console.log(this.allQuotes)
}
}
