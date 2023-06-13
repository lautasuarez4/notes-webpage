import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../models/note';
import { NoteService } from '../../service/note.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteEditComponent } from '../note-edit/note-edit.component';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent {
  noteList:Note[] = [];
  
  constructor(private router:Router,
    private noteService: NoteService,
    private matdialog: MatDialog){}

    ngOnInit(): void {
      this.list();
    }

    list(){
      this.noteService.getNotes().subscribe(res=>{
        if(res){
          this.noteList = res;
        }
      });
    }

    openPopup() {
      const popup= this.matdialog.open(NoteEditComponent,{width:'70%',height:'400px',
        enterAnimationDuration:'500ms',
        exitAnimationDuration:'500ms',
        data: {
          id_note:0,
          title:"",
          content:"",
          lastUpdated: new Date(),
          archived:false,
          deleted: false
        }
      });
      popup.afterClosed().subscribe(item=>{
        this.list();
      });
    }

}
