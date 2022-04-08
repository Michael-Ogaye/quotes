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
      'medicine','If life were predictable  it would cease to be life, and be without flavor.','Michael','2022-04-08',0,0,
    ),
    new Quote(
      'medicine','If life were predictable  it would cease to be life, and be without flavor.','Michael','2022-04-08',0,0,
    ),
    new Quote(
      'medicine','If life were predictable  it would cease to be life, and be without flavor.','Michael','2022-04-08',0,0,
    )
    
    

  ]

// method to add new quotes into the array
addQuote(dat:Quote){

this.allQuotes.push(dat);

}

url1="../assets/images/right.svg"

log(){
  console.log(this.allQuotes)
}
}
