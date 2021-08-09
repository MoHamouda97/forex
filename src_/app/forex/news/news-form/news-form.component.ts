import { NewsService } from './../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';
import * as $ from 'jquery';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  imageName = 'اختر الصورة';
  image: any = '';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: NewsService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      photo: ['']
    }); 
    
    this.route.data.subscribe(
      res => {
        if (res.title == 'تعديل الخبر') {
          this.isUpdate = true;
          this.addValuesToForm(JSON.parse(localStorage.getItem('obj')))
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
    const data = await this.service.add(this.form.get('title').value, this.form.get('description').value, this.image);
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
    const data = await this.service.update(this.form.get('title').value, this.form.get('description').value, this.image, id.id);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.updateTitle, lang.ar.updateMsg)
  }  

}
