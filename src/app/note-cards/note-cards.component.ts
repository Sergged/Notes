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
  }

  refreshList() {
      this.searchResultHeadlines = this.searchService.get();

      this.headlines = this.store.getNotesHeadlines();
  }

  isHiddenWhenSearch(index) {
    const temp = !(this.headlines[index] == this.searchResultHeadlines[index]);
    console.log(temp);
    return temp;
  }

  ngOnInit() {
    this.refreshList();

    this.route.queryParams.subscribe(
      qp => {
        if (qp.refresh === 'true') {
          this.refreshList();
        }
      }
    );
  }
}
