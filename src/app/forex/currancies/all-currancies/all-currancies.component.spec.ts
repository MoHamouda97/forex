import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCurranciesComponent } from './all-currancies.component';

describe('AllCurranciesComponent', () => {
  let component: AllCurranciesComponent;
  let fixture: ComponentFixture<AllCurranciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCurranciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCurranciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
