import { UserSubService } from './../../../../services/user-sub/user-sub.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-user-sub-form',
  templateUrl: './user-sub-form.component.html',
  styleUrls: ['./user-sub-form.component.css']
})
export class UserSubFormComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  subscriptions: any[] = [];
  users: any[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: UserSubService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      user_id: ['', Validators.required],
      subcription_id: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل اشتراك') {
          this.isUpdate = true;
          this.addValuesToForm(JSON.parse(localStorage.getItem('obj')))
        } else this.isUpdate = false;

        this.users = res.users.users;
        this.subscriptions = res.subscriptions.data;
      }
    )    
  }

  async add() {
    this.isAdd = true;
    const data = await this.service.add(this.form.getRawValue());
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
    console.log
  }

  addValuesToForm(object) {
    let obj = Object.keys(object);

    for (let i = 0; i <= obj.length - 1; i++) {

      if (typeof this.form.controls[obj[i]] != 'undefined') {

        this.form.get(obj[i]).setValue(object[obj[i]]);             
        
      }

    }
  }

  async update() {
    this.isAdd = true;
    const id = JSON.parse(localStorage.getItem('obj'))
    const data = await this.service.update(this.form.getRawValue(), id.id);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.updateTitle, lang.ar.updateMsg)
  }    

}
