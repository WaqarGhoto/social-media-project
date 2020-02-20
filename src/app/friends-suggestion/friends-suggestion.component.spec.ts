import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSuggestionComponent } from './friends-suggestion.component';

describe('FriendsSuggestionComponent', () => {
  let component: FriendsSuggestionComponent;
  let fixture: ComponentFixture<FriendsSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
