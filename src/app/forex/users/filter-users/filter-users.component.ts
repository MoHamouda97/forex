import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenericService } from 'src/services/generic/generic.service';
import { UsersService } from 'src/services/users/users.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {
  form: FormGroup;
  
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private service: UsersService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [''],
      address: [''],
      email: [''],
      mobile: [''],
    })    
  }

  async filter() {
    this.loading.emit(true);

    let filters: any[] = [
      (Boolean(this.form.get('username').value)) && {"Users.username": this.form.get('username').value}, 
      (Boolean(this.form.get('address').value)) && {"Users.address": this.form.get('address').value}, 
      (Boolean(this.form.get('email').value)) && {"Users.email": this.form.get('email').value}, 
      (Boolean(this.form.get('mobile').value)) && {"Users.mobile": this.form.get('mobile').value},       
    ];
    filters = filters.filter(val => Boolean(val));

    const data: any = await this.service.filter(filters); 

    this.data.emit(data["users"]);    
    this.pages.emit(data["pagination"]);    
    this.loading.emit(false);
  } 

}
