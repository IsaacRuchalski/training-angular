import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesDetailComponent } from './runes-detail.component';

describe('RunesDetailComponent', () => {
  let component: RunesDetailComponent;
  let fixture: ComponentFixture<RunesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
