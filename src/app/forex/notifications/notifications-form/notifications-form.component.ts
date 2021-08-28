import { NotificationsService } from './../../../../services/notifications/notifications.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as lang from './../../../../settings/lang';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-notifications-form',
  templateUrl: './notifications-form.component.html',
  styleUrls: ['./notifications-form.component.css']
})
export class NotificationsFormComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  imageName = 'اختر الصورة';
  image: any = '';
  obj: any = {};
  
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: NotificationsService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      user_id: [parseInt(localStorage.getItem('userid'))],
      text: ['', Validators.required],
    }); 
    
    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل اشعار') {
          this.isUpdate = true;
          this.imageName = 'تغير الصورة';
          this.obj = JSON.parse(localStorage.getItem('obj'))
          this.addValuesToForm(this.obj)
        } else this.isUpdate = false;
      }
    )    
  }

  //#region Upload image

  getImageName(files: FileList, type) {
    let fileName = $('#photo').val().toString().replace(/C:\\fakepath\\/i, '');
    this.imageName = fileName;
    this.image = files.item(0);
  }  

  //#endregion
  
  async add() {
    this.isAdd = true;
    const data = await this.service.add(this.form.get('user_id').value, this.form.get('text').value, this.image);
    this.isAdd = false;
    console.log(data)
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
    const data = await this.service.update(this.form.get('user_id').value, this.form.get('text').value, this.image, id.id);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.updateTitle, lang.ar.updateMsg)
  } 
}
