import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-des',
  templateUrl: './quote-des.component.html',
  styleUrls: ['./quote-des.component.css']
})
export class QuoteDesComponent implements OnInit {
@Input()quote:Quote | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
