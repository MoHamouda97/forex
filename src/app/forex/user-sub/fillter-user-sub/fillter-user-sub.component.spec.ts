import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillterUserSubComponent } from './fillter-user-sub.component';

describe('FillterUserSubComponent', () => {
  let component: FillterUserSubComponent;
  let fixture: ComponentFixture<FillterUserSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillterUserSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillterUserSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
