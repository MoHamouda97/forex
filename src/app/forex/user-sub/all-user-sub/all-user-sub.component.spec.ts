import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserSubComponent } from './all-user-sub.component';

describe('AllUserSubComponent', () => {
  let component: AllUserSubComponent;
  let fixture: ComponentFixture<AllUserSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUserSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
