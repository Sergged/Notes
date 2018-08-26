import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NotesStoreService} from '../../notes-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchText') searchText: ElementRef;
  constructor(private store: NotesStoreService) { }

  ngOnInit() {
  }

  search() {
    console.log(this.searchText.nativeElement.value.toLowerCase());
    // this.store.search(this.searchText.nativeElement.value.toLowerCase());
  }
}
