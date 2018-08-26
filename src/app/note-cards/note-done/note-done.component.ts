import {Component, Input, OnInit} from '@angular/core';
import {NotesStoreService} from '../../notes-store.service';

@Component({
  selector: 'app-note-done',
  templateUrl: './note-done.component.html',
  styleUrls: ['./note-done.component.css']
})
export class NoteDoneComponent implements OnInit {

  @Input() noteIndex;
  constructor(protected store: NotesStoreService) { }

  ngOnInit() {
  }

}
