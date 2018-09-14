import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {notesReducer} from './Store/reducers/notes.reducers';
import {NoteCardsComponent} from './components/note-cards/note-cards.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { DeleteCardComponent } from './note-cards/delete-card/delete-card.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { NoteDoneComponent } from './note-cards/note-done/note-done.component';
// import { SearchComponent } from './note-cards/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardsComponent,
    NoteDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({notesStore: notesReducer}),
    RouterModule.forRoot([
      {path: '', redirectTo: 'notes/0', pathMatch: 'full'},
      {path: 'notes/:id', component: NoteDetailsComponent},
      {path: 'not-found', component: NotFoundComponent},
      {path: '**', redirectTo: 'not-found'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
