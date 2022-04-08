import { Title } from "@angular/platform-browser";

export class Quote {

    constructor(public title:string, public author:string,public content:string,public upVote:number,public downVote:number,public date:string){

    }
}
