import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserItemComponent } from './search-user-item.component';

describe('SearchUserItemComponent', () => {
  let component: SearchUserItemComponent;
  let fixture: ComponentFixture<SearchUserItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUserItemComponent]
    });
    fixture = TestBed.createComponent(SearchUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
