import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/service/note.service';
import { NoteEditComponent } from '../note-edit/note-edit.component';

@Component({
  selector: 'app-archived-notes',
  templateUrl: './archived-notes.component.html',
  styleUrls: ['./archived-notes.component.css']
})
export class ArchivedNotesComponent {

  noteList:Note[] = [];

  constructor(private router:Router,
    private noteService: NoteService,
    private matdialog: MatDialog){}

    ngOnInit(): void {
      this.list();
    }

    list(){
      this.noteService.getArchivedNotes().subscribe(res=>{
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
