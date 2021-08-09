import { GenericService } from './../../../../services/generic/generic.service';
import { CurranciesService } from 'src/services/currancies/currancies.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-currancy',
  templateUrl: './add-currancy.component.html',
  styleUrls: ['./add-currancy.component.css']
})
export class AddCurrancyComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: CurranciesService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price_sell: ['', Validators.required],
      price_buy: ['', Validators.required],
    });

    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل العملة') {
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
