import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import { UserSubService } from 'src/services/user-sub/user-sub.service';

@Component({
  selector: 'app-fillter-user-sub',
  templateUrl: './fillter-user-sub.component.html',
  styleUrls: ['./fillter-user-sub.component.css']
})
export class FillterUserSubComponent implements OnInit {
  form: FormGroup;
  
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();

  subscriptions: any[] = [];
  users: any[] = [];
  
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: UserSubService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      user_id: [''],
      subcription_id: [''],
      price: ['']
    });
    
    this.route.data.subscribe(
      res => {
        this.users = res.users.users;
        this.subscriptions = res.subscriptions.data;
      }
    )     
  }

  async filter() {
    this.loading.emit(true);

    let filters: any[] = [
      (Boolean(this.form.get('user_id').value)) && {"UserSubscriptions.user_id": this.form.get('user_id').value},      
      (Boolean(this.form.get('subcription_id').value)) && {"UserSubscriptions.subcription_id": this.form.get('subcription_id').value},      
      (Boolean(this.form.get('price').value)) && {"UserSubscriptions.price": this.form.get('price').value},      
    ];
    filters = filters.filter(val => Boolean(val));

    const data: any = await this.service.filter(filters); 

    this.data.emit(data["data"]);    
    this.pages.emit(data["pagination"]);    
    this.loading.emit(false);
  } 

}
