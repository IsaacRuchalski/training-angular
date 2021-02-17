import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesSearchComponent } from './runes-search.component';

describe('RunesSearchComponent', () => {
  let component: RunesSearchComponent;
  let fixture: ComponentFixture<RunesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
