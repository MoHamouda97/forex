import { TradesService } from './../../../../../src/services/trades/trades.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-filter-trades',
  templateUrl: './filter-trades.component.html',
  styleUrls: ['./filter-trades.component.css']
})
export class FilterTradesComponent implements OnInit {
  form: FormGroup;
  
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();

  currancies: any[] = []

  constructor(private fb: FormBuilder, private service: TradesService, private generic: GenericService) { }

  ngOnInit() {
    this.service.getCurrencies().subscribe(
      res => {
        this.currancies = res.data;
      }
    )

    this.form = this.fb.group({
      currency_id: [''],
      enter: [''],
      exit: [''],
    })    
  }

  async filter() {
    this.loading.emit(true);

    let filters: any[] = [
      (Boolean(this.form.get('currency_id').value)) && {"Trades.currency_id": this.form.get('currency_id').value},
      (Boolean(this.form.get('enter').value)) && {"Trades.enter": this.form.get('enter').value},
      (Boolean(this.form.get('exit').value)) && {"Trades.exit": this.form.get('exit').value},
      
    ];
    filters = filters.filter(val => Boolean(val));

    const data: any = await this.service.filter(filters); 

    this.data.emit(data["trades"]);    
    this.pages.emit(data["pagination"]);    
    this.loading.emit(false);
  } 
}
