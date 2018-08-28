import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotesStoreService} from '../../notes-store.service';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {

  @Input() noteIndex;
  @Output() onDelete = new EventEmitter<boolean>();

  constructor(private store: NotesStoreService) { }

  ngOnInit() {
  }

  delete() {
    this.store.deleteNote(this.noteIndex);
    this.onDelete.emit();
  }
}
