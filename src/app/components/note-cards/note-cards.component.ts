import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {INote} from '../../models/inote';
import * as NotesActions from '../../Store/actions/notes.actions';
import { NewNote } from '../../Store/reducers/new-note';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {

  constructor(private store: Store<{ notesStore: {notes: INote[]} }>,
              private router: Router ) { }


  public notesState: Observable<{notes: INote[]}>;
  test() {
    let tes;
      this.notesState.subscribe(data => tes = data.notes);
    console.log(tes);
  }
  newNote() {
    // this.router.navigate(['notes', this.store.newNote()]);
    // this.searchResultHeadlines = this.headlines;
    this.store.dispatch( new NotesActions.AddNote(new NewNote('Test', 'Yet another test')) );
  }

  lookUpNote(noteIndex) {
    this.router.navigate(['notes', noteIndex]);
  }
  // refreshList() {
  //   this.headlines = this.store.getNotesHeadlines();
  //
  //   this.searchResultHeadlines = this.headlines;
  // }
  //
  // isHiddenWhenSearch(index) {
  //   return !(this.headlines[index] == this.searchResultHeadlines[index]);
  // }

  ngOnInit() {
    this.notesState = this.store.select('notesStore');

    // this.route.queryParams.subscribe(
    //   qp => {
    //     if (qp.refresh === 'true') {
    //       this.refreshList();
    //     }
    //     if (qp.search === 'true') {
    //       this.searchResultHeadlines = this.searchService.get();
    //     }
    //     // else {
    //     //   this.searchResultHeadlines = this.headlines;
    //     // }
    //   }
    // );
  }
}
