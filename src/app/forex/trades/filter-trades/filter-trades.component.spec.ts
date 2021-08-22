import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTradesComponent } from './filter-trades.component';

describe('FilterTradesComponent', () => {
  let component: FilterTradesComponent;
  let fixture: ComponentFixture<FilterTradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
