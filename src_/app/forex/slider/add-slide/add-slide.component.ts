import { SliderService } from './../../../../services/slider/slider.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-slide',
  templateUrl: './add-slide.component.html',
  styleUrls: ['./add-slide.component.css']
})
export class AddSlideComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  imageName = 'اختر الصورة';
  image: any = '';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: SliderService, private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      photo: [''],
    });    
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
    const data = await this.service.add(this.image);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
    this.imageName = 'اختر الصورة';
    this.image = '';
  }  

}
