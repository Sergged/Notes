import { TestBed, inject } from '@angular/core/testing';

import { NotesStoreService } from './notes-store.service';

describe('NotesStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesStoreService]
    });
  });

  it('should be created', inject([NotesStoreService], (service: NotesStoreService) => {
    expect(service).toBeTruthy();
  }));
});
