import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesChildComponent } from './sentences-child.component';

describe('SentencesChildComponent', () => {
  let component: SentencesChildComponent;
  let fixture: ComponentFixture<SentencesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentencesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
