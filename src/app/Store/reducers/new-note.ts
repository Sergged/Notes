import { INote  } from '../../models/inote';

export class NewNote implements INote {
  public headline;
  public content;
  public isDone = false;

  constructor(headline, content) {
    this.headline = headline || 'Headline';
    this.content = content || 'This is a new note.\nWrite what you want right here';
  }

}
