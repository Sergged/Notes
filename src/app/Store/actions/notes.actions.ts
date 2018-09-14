import {Action} from '@ngrx/store';

import {constants as C} from '../constants';
import {INote} from '../../models/inote';

export class AddNote implements Action {
  readonly type = C.ADD_NOTE;

  constructor(public payload: INote) {}
}


export type NotesActions = AddNote;
