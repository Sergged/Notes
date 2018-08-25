import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesStoreService {

  private notes = [
    {headline: 'Youki', content: 'Bla'},
    {headline: 'Naoikb', content: 'Nha'},
    {headline: 'Boolkso', content: 'Glu'},
    {headline: 'Joll', content: 'Kola'}
  ];

  public getNotesHeadlines() {
    const headlines = [];
    for (let i = 0; i < this.notes.length; i++) {
      headlines.push(this.notes[i].headline);
    }
    return headlines;
  }

  public getNoteContent(noteId) {
    return this.notes[noteId].content;
  }
  constructor() { }
}
