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
      'medicine','Michael','If life were predictable  it would cease to be life, and be without flavor.',0,0,'2022-04-08'
    ),
    new Quote(
      'Justice','Justus','Descriptions are like skirts, they should be long enough to cover the subject, but short enough to keep things interesting.',0,0,'2022-04-08'
    ),
    new Quote(
      'knowlege','Paul','If life were predictable it would cease to be life, and be without flavor.',0,0,'2022-04-08'
    )
    

  ]
log(){
  console.log(this.allQuotes)
}
// method to add new quotes into the array
addQuote(dat:Quote){
let title=dat.title;
let author= dat.author;
let cont=dat.content;
let date=dat.date;
this.allQuotes.push()

}

url1="../assets/images/right.svg"
}
