import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { INote } from '../../models/inote';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<{notesStore: {notes: INote[]}}>) { }

  @ViewChild('editableHeadline') editableHeadline;
  @ViewChild('editableContent') editableContent;

  public isEdited = false;
  public currentNoteId;
  public noteContent;
  public headline;
  public notesState;
  public notes;

  ngOnInit() {
    this.notesState = this.store.select('notesStore');
    this.notesState.subscribe(data => {
      this.notes = data.notes;
    });
    this.route.params.subscribe(
      params => {
        this.currentNoteId = params.id;
        this.headline = this.notes[this.currentNoteId].headline;
        this.noteContent = this.notes[this.currentNoteId].content;
      }
    );

  }

  updateNote(noteIndex) {
    this.isEdited = !this.isEdited;
    this.headline = this.editableHeadline.value;
    this.noteContent = this.editableContent.value;
    this.router.navigate([], { queryParams: {'refresh': true} });
  }
}
