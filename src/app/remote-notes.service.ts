import {Injectable, OnInit} from '@angular/core';
import {INote} from './inote';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteNotesService implements OnInit {

  constructor(private http: HttpClient) {
  }

  private _url = 'src/assets/db.json';
  private _notes;

  ngOnInit() {
  }

  get() {
    return this.http.get(this._url);
  }
}
