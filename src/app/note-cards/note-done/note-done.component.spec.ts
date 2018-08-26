import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDoneComponent } from './note-done.component';

describe('NoteDoneComponent', () => {
  let component: NoteDoneComponent;
  let fixture: ComponentFixture<NoteDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
