import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})

export class NoteEditComponent implements OnInit {

  note: Note;
  titleError: string = "";
  contentError: string="";
  realTitle:string;
  realContent:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Note, 
  private Ref: MatDialogRef<NoteEditComponent>,
  private noteService: NoteService) {
    this.note = data;
    this.realTitle = this.note.title;
    this.realContent = this.note.content;
  }
  
  ngOnInit(): void {
    this.note = this.data;
  }
  closePopUp() {
    this.Ref.close();
    this.note.title = this.realTitle;
  }

  save(){
    if(this.note.title == "")
      this.titleError = "Title can't be empty"

    if(this.note.content == "")
      this.contentError = "Content can't be empty"

    if(this.note.content === "" || this.note.title === "")
      return;

    if(this.note.id_note===0)
      this.noteService.saveNote(this.note).subscribe(res=> {
        this.closePopUp();
      });
    else
      this.noteService.updateNote(this.note).subscribe(res=> {
        this.closePopUp();
      });
    
  }
  
}
