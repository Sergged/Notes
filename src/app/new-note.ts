import {INote} from './inote';

export class NewNote implements INote {
  public headline = 'Headline';
  public content = 'This is a new note.\nWrite what you want right here';
  public isDone = false;
}
