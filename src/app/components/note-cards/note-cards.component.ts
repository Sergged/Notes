import {Component, OnInit} from '@angular/core';
import {NotesStoreService} from '../notes-store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from './search/search.service';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.css']
})
export class NoteCardsComponent implements OnInit {

  constructor(protected store: NotesStoreService,
              private router: Router,
              private route: ActivatedRoute,
              private searchService: SearchService) { }

  public headlines: string[];
  public searchResultHeadlines;
  newNote() {
    this.router.navigate(['notes', this.store.newNote()]);
    this.refreshList();
    // this.searchResultHeadlines = this.headlines;
  }

  refreshList() {
    this.headlines = this.store.getNotesHeadlines();

    this.searchResultHeadlines = this.headlines;
  }

  isHiddenWhenSearch(index) {
    return !(this.headlines[index] == this.searchResultHeadlines[index]);
  }

  ngOnInit() {
    this.refreshList();
    // this.searchResultHeadlines = this.headlines;

    this.route.queryParams.subscribe(
      qp => {
        if (qp.refresh === 'true') {
          this.refreshList();
        }
        if (qp.search === 'true') {
          this.searchResultHeadlines = this.searchService.get();
        }
        // else {
        //   this.searchResultHeadlines = this.headlines;
        // }
      }
    );
  }
}
