import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output()quoteEvent=new EventEmitter<Quote>()

  closeResult = '';

  constructor(private modalService: NgbModal) {
    
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
     
  }

  //creating form
  createQuote(formd:NgForm){
    
    let formdata= formd.value;
    let cDate=""+formdata.date.year+"-"+formdata.date.month+"-"+formdata.date.day+ ""

    formdata.upVote=0;
    formdata.downVote=0;
    formdata.date= cDate;
    console.log(formdata.date)
    this.quoteEvent.emit(formdata);
  }
  
  

}
