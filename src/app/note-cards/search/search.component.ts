import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NotesStoreService} from '../../notes-store.service';
import {Router} from '@angular/router';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchText') searchText: ElementRef;
  constructor(private store: NotesStoreService, private router: Router, private searchService: SearchService) { }

  public searchResults: string[];
  search() {

    const querySearchValue = this.searchText.nativeElement.value.toLowerCase();
    let resetSearch = false;

    this.searchService.push( this.store.search( querySearchValue ) );
    if (querySearchValue == '') { resetSearch = true; }
    //Работае и с reset и без, почему?
    this.router.navigate(['not-found'], { queryParams: {'refresh': true, 'search': !resetSearch} });

  }
  ngOnInit() {
  }


}
