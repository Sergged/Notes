import {Component, Input, OnInit} from '@angular/core';
import {NotesStoreService} from '../../notes-store.service';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {

  @Input() noteIndex;
  constructor(protected store: NotesStoreService) { }

  ngOnInit() {
  }

}
