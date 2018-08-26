import { TestBed, inject } from '@angular/core/testing';

import { RemoteNotesService } from './remote-notes.service';

describe('RemoteNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteNotesService]
    });
  });

  it('should be created', inject([RemoteNotesService], (service: RemoteNotesService) => {
    expect(service).toBeTruthy();
  }));
});
