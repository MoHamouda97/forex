import { ContactService } from 'src/services/contact/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';
import * as $ from 'jquery';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  imageName = 'اختر الصورة';
  image: any = '';
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: ContactService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      value: [''],
      logo: ['']
    });

    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل وسيلة تواصل') {
          this.isUpdate = true;
          this.addValuesToForm(JSON.parse(localStorage.getItem('obj')))
        } else this.isUpdate = false;
      }
    )
  }

  //#region Upload image

  getImageName(files: FileList, type) {
    let fileName = $('#logo').val().toString().replace(/C:\\fakepath\\/i, '');
    this.imageName = fileName;
    this.image = files.item(0);
  }  

  //#endregion 

  async add() {
    this.isAdd = true;
    const data = await this.service.add(this.form.get('name').value, this.form.get('value').value, this.image);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
    this.imageName = 'اختر الصورة';
    this.image = '';
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
    const data = await this.service.update(this.form.get('name').value, this.form.get('value').value, this.image, id.id);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.updateTitle, lang.ar.updateMsg)
  }

}
