import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>('http://localhost:9000/note' + '/my-notes').pipe(map(res => res));
  }

  getArchivedNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>('http://localhost:9000/note' + '/archived-notes').pipe(map(res => res));
  }

  saveNote(request:Note): Observable<any>{
    return this.httpClient.post<any>('http://localhost:9000/note' + '/save', request).pipe(map(res=> res));
  }

  updateNote(request:Note): Observable<any>{
    return this.httpClient.put<any>('http://localhost:9000/note' + '/update', request).pipe(map(res=> res));
  }

  deleteNote(id_note:number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:9000/note' + '/delete/' + id_note).pipe(map(res=> res));
  }

}
