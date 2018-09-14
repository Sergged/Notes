import * as NotesActions from '../actions/notes.actions';
import {NewNote} from './new-note';
import { constants as C } from '../constants';

const initialState = {
  notes: [
    new NewNote('Google', 'Hello, world, I\'m Google'),
    new NewNote('Apple', 'Hello, world, I\'m Apple')
  ]
};

export function notesReducer(state = initialState, action: NotesActions.NotesActions) {
  switch (action.type) {
    case C.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    default:
      return state;
  }

}

// --- Not interesting, just part of old Service ---
// public getNotesHeadlines() {
//     const headlines = [];
//     for (let i = 0; i < this.notes.length; i++) {
//       headlines.push(this.notes[i].headline);
//     }
//     return headlines;
//   }
//
//   public getNoteHeadline(noteIndex) {
//     return this.notes[noteIndex].headline;
//   }
//
//   public getDoneList() {
//     const doneList = [];
//     for (let i = 0; i < this.notes.length; i++) {
//       doneList.push(this.notes[i].isDone);
//     }
//     return doneList;
//   }
// public getNoteContent(noteId) {
//     this._idActivatedByNoteDetails = noteId;
//
//     return this.notes[noteId].content;
//   }


















