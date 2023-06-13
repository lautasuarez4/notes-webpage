import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Note } from 'src/app/models/note';
import { NoteEditComponent } from '../note-edit/note-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteNoteComponent } from '../delete-note/delete-note.component';
import { NoteService } from 'src/app/service/note.service';
import { CommonModule, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'

/**
 * @title Notes
 */
@Component({
  selector: 'app-note-card',
  templateUrl: 'note-card.component.html',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, BrowserModule, NgIf, MatIconModule],
})
export class NoteCardComponent {

@Input() note:Note= new Note("Default Note", "No Content", new Date(), false, false);

@Output() reloadList = new EventEmitter<string>();


constructor(private matdialog: MatDialog, private noteService: NoteService){
}



reload(){
  this.reloadList.emit();
}

openPopup() {
      const popup= this.matdialog.open(NoteEditComponent,{width:'70%',height:'400px',
        enterAnimationDuration:'500ms',
        exitAnimationDuration:'500ms',
        disableClose:true,
        data: this.note
      });
    }

  deleteNote(){
    const popup= this.matdialog.open(DeleteNoteComponent,{width:'30%',height:'200px',
        enterAnimationDuration:'500ms',
        exitAnimationDuration:'500ms',
        data: this.note
      });
      popup.afterClosed().subscribe(item=>{
        this.reload();
      });
  }

  archiveNote(){
    this.note.archived=true;
    this.noteService.updateNote(this.note).subscribe(item=>{
        this.reload();
      });
  }

  restore(){
    this.note.archived=false;
    this.noteService.updateNote(this.note).subscribe(item=>{
        this.reload();
      });
    }
}


