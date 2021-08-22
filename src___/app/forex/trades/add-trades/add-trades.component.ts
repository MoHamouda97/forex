import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import { TradesService } from 'src/services/trades/trades.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-add-trades',
  templateUrl: './add-trades.component.html',
  styleUrls: ['./add-trades.component.css']
})
export class AddTradesComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  data: any[] = [];

  constructor(public route: ActivatedRoute, private fb: FormBuilder, private service: TradesService, private generic: GenericService) { }

  ngOnInit() {
    this.service.getCurrencies().subscribe(
      res => {
        this.data = res.data;
      }
    )
    this.form = this.fb.group({
      currency_id: [''],
      enter: [''],
      exit: [''],
      notes: [''],
      vips: [''],
    }); 
    
    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل صفقات') {
          this.isUpdate = true;
          this.addValuesToForm(JSON.parse(localStorage.getItem('obj')))
        } else this.isUpdate = false;
      }
    )     

    
  }

  addValuesToForm(object) {
    console.log(object)
    let obj = Object.keys(object);

    for (let i = 0; i <= obj.length - 1; i++) {

      if (typeof this.form.controls[obj[i]] != 'undefined') {

        if (obj[i] == 'vips') {
          this.form.get('vips').setValue((object[obj[i]] == '1') ? true : false);
        } else this.form.get(obj[i]).setValue(object[obj[i]]);                           
      }

    }
  }  

  async add() {
    this.isAdd = true;
    const data = await this.service.add(this.form.get('currency_id').value, this.form.get('enter').value, this.form.get('exit').value, this.form.get('notes').value, this.form.get('vips').value ? "1" : "0") ;
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
  } 
  
  async update() {
    this.isAdd = true;
    const id = JSON.parse(localStorage.getItem('obj'))
    const data = await this.service.update(this.form.get('currency_id').value, this.form.get('enter').value, this.form.get('exit').value, this.form.get('notes').value, this.form.get('vips').value ? "1" : "0", id.id);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.updateTitle, lang.ar.updateMsg)
  }   

}
