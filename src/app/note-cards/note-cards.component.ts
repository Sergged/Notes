import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {NotesStoreService} from '../notes-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit, AfterContentChecked {

  constructor(protected store: NotesStoreService, private router: Router) { }

  public headlines: string[];
  newNote() {
    this.router.navigate(['notes', this.store.newNote()]);
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.headlines = this.store.getNotesHeadlines();
  }
}
