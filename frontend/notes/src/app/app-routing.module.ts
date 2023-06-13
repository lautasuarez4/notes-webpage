import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArchivedNotesComponent } from "./components/archived-notes/archived-notes.component";
import { MyNotesComponent } from './components/my-notes/my-notes.component';

const routes: Routes = [
  {path : '', component : MyNotesComponent},
  {path:"archivedNotes", component:ArchivedNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
