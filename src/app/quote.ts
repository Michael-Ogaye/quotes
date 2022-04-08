import { Title } from "@angular/platform-browser";

export class Quote {

    constructor(public title:string, public content:string,public author:string,public date:string,public upVote:number,public downVote:number){

    }
}
