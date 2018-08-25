import { Component, OnInit } from '@angular/core';
import {NotesStoreService} from '../notes-store.service';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {

  constructor(private store: NotesStoreService) { }

  public headlines: string[];
  ngOnInit() {
    this.headlines = this.store.getNotesHeadlines();
  }

}
