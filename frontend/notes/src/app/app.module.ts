import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchivedNotesComponent } from './components/archived-notes/archived-notes.component';
import {MatCardModule} from '@angular/material/card';
import {NoteCardComponent} from './components/note-card/note-card.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteNoteComponent } from './components/delete-note/delete-note.component';
import { CommonModule } from '@angular/common';
import { MyNotesComponent } from './components/my-notes/my-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchivedNotesComponent,
    NoteEditComponent,
    DeleteNoteComponent,
    MyNotesComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      MatCardModule,
      NoteCardComponent,
      HttpClientModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatButtonModule,
      BrowserAnimationsModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
