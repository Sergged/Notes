import { Component, OnInit } from '@angular/core';
import {NotesStoreService} from '../notes-store.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private store: NotesStoreService, private route: ActivatedRoute) { }

  public currentNoteId;
  public noteContent;
  public headlines: string[];
  ngOnInit() {
    this.headlines = this.store.getNotesHeadlines();
    this.route.params.subscribe(
      params => {
        this.currentNoteId = params.id;
        this.noteContent = this.store.getNoteContent(this.currentNoteId);
      }
    );

  }

}
