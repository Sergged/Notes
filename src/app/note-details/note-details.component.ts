import {Component, OnInit, ViewChild} from '@angular/core';
import {NotesStoreService} from '../notes-store.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private store: NotesStoreService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('editableHeadline') editableHeadline;
  @ViewChild('editableContent') editableContent;

  public isEdited = false;
  public currentNoteId;
  public noteContent;
  public headline;

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.currentNoteId = params.id;
        this.headline = this.store.getNotesHeadline(this.currentNoteId);
        this.noteContent = this.store.getNoteContent(this.currentNoteId);
      }
    );
  }

  updateNote(noteIndex) {
    this.isEdited = !this.isEdited;
    this.headline = this.editableHeadline.value;
    this.noteContent = this.editableContent.value;
    this.store.updateNote(noteIndex, this.editableHeadline.value, this.editableContent.value);
    this.router.navigate([], { queryParams: {'refresh': true} });
  }
}
