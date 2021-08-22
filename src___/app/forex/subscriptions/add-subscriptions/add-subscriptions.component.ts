import { SubscriptionsService } from 'src/services/subscriptions/subscriptions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-add-subscriptions',
  templateUrl: './add-subscriptions.component.html',
  styleUrls: ['./add-subscriptions.component.css']
})
export class AddSubscriptionsComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: SubscriptionsService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      period: [''],
    }); 
    
    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل اشتراك') {
          this.isUpdate = true;
          this.addValuesToForm(JSON.parse(localStorage.getItem('obj')))
        } else this.isUpdate = false;
      }
    )    
  }

  addValuesToForm(object) {
    let obj = Object.keys(object);

    for (let i = 0; i <= obj.length - 1; i++) {

      if (typeof this.form.controls[obj[i]] != 'undefined') {

        this.form.get(obj[i]).setValue(object[obj[i]]);             
        
      }

    }
  }
  
  async add() {
    this.isAdd = true;
    const data = await this.service.add(this.form.getRawValue());
    console.log(data)
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
  } 
  
  async update() {
    this.isAdd = true;
    const id = JSON.parse(localStorage.getItem('obj'))
    const data = await this.service.update(this.form.getRawValue(), id.id);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.updateTitle, lang.ar.updateMsg)
  }   

}
