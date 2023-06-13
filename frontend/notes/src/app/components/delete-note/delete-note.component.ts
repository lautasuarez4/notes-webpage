import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent {

  note:Note;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note, 
  private Ref: MatDialogRef<DeleteNoteComponent>,
  private noteService: NoteService) {
    this.note = data;
  }

  closePopUp() {
    this.Ref.close();
  }

  deleteNote(){
    this.noteService.deleteNote(this.note.id_note).subscribe(res=> {
      this.closePopUp();
    });
  }
}
