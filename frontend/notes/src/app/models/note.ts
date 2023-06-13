export class Note {
    id_note: number = 0;
    title:string;
    content:string;
    lastUpdated:Date;
    archived:boolean;
    deleted:boolean;

    constructor(t:string,c:string, l:Date, archived:boolean, d:boolean){
        this.title=t;
        this.lastUpdated=l;
        this.content=c;
        this.archived=archived;
        this.deleted=d;
    }
}
