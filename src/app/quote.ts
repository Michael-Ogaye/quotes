import { Title } from "@angular/platform-browser";

export class Quote {
    showDes!: boolean;

    constructor(public title:string, public content:string,public author:string,public sub:string,public date:Date,public upVote:number,public downVote:number){
this.showDes=false;
    }
}
