import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {INote} from './inote';
import {NewNote} from './new-note';
import {RemoteNotesService} from './remote-notes.service';

@Injectable({
  providedIn: 'root'
})
export class NotesStoreService {

  private _idActivatedByNoteDetails;
  constructor(private route: ActivatedRoute, private router: Router, private remote: RemoteNotesService) {}

  // Primary store for Notes
  public notes = [
    {headline: 'Google', content: 'bla-bla-bla', isDone: false}
  ];
  public backupOfNotes = this.notes;

  search(searchText) {
    if (searchText === '') {
      this.notes = this.backupOfNotes;
    } else {
      const searchResultNotes = [];
      for (let i = 0; i < this.notes.length; i++) {
        if (this.notes[i].headline.toLowerCase().indexOf(searchText) >= 0) {
          searchResultNotes.push(this.notes[i].headline);
        }
      }
      this.notes = searchResultNotes;
    }
  }

  public newNote() {
    this.notes.push( new NewNote() );
    return this.notes.length - 1;
  }

  public getNotesHeadlines() {
    const headlines = [];
    for (let i = 0; i < this.notes.length; i++) {
      headlines.push(this.notes[i].headline);
    }
    return headlines;
  }

  public getNotesHeadline(noteIndex) {
    return this.notes[noteIndex].headline;
  }

  public deleteNote(index) {
    for (let i = index; i < this.notes.length - 1; i++) {
      this.notes[i] = this.notes[i + 1];
    }
    delete this.notes[this.notes.length - 1];
    this.notes.length--;

    if (this._idActivatedByNoteDetails == index) {
      this.router.navigate(['not-found']);
    }
  }

  public getNoteContent(noteId) {
    this._idActivatedByNoteDetails = noteId;

    return this.notes[noteId].content;
  }

  public updateNote(noteIndex, headline, content) {
    this.notes[noteIndex].headline = headline;
    this.notes[noteIndex].content = content;
  }

  public doneToggle(index) {
    this.notes[index].isDone = !this.notes[index].isDone;
  }
}
