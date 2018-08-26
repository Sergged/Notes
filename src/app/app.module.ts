import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import {RouterModule} from '@angular/router';
import { DeleteCardComponent } from './note-cards/delete-card/delete-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NoteDoneComponent } from './note-cards/note-done/note-done.component';
import { SearchComponent } from './note-cards/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardsComponent,
    NoteDetailsComponent,
    DeleteCardComponent,
    NotFoundComponent,
    NoteDoneComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
