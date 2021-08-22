import { GenericService } from './../../../../../src/services/generic/generic.service';
import { NewsService } from './../../../../services/news/news.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-news',
  templateUrl: './filter-news.component.html',
  styleUrls: ['./filter-news.component.css']
})
export class FilterNewsComponent implements OnInit {
  form: FormGroup;
  
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private service: NewsService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      created: ['']
    })    
  }

  async filter() {
    this.loading.emit(true);

    let filters: any[] = [
      (Boolean(this.form.get('title').value)) && {"News.title": this.form.get('title').value},
      (Boolean(this.form.get('created').value)) && {"News.created": this.generic.formatDate(this.form.get('created').value, 'filter')}, 
    ];
    filters = filters.filter(val => Boolean(val));

    const data: any = await this.service.filter(filters); 

    this.data.emit(data["news"]);    
    this.pages.emit(data["pagination"]);    
    this.loading.emit(false);
  } 

}
