import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrancyComponent } from './add-currancy.component';

describe('AddCurrancyComponent', () => {
  let component: AddCurrancyComponent;
  let fixture: ComponentFixture<AddCurrancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurrancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
