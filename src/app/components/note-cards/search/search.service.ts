import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  searchResult = [];

  push(searchResult) {
    this.searchResult = searchResult;
  }

  get() {
    return this.searchResult;
  }

}
