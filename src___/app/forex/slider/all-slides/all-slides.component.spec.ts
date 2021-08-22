import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSlidesComponent } from './all-slides.component';

describe('AllSlidesComponent', () => {
  let component: AllSlidesComponent;
  let fixture: ComponentFixture<AllSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
