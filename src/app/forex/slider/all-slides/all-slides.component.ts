import { SliderService } from './../../../../services/slider/slider.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-slides',
  templateUrl: './all-slides.component.html',
  styleUrls: ['./all-slides.component.css']
})
export class AllSlidesComponent implements OnInit {
  data: any[] = [];
  loading: boolean = false;
  header: any[] = [
    '#',
    'سلايد',
    'التاريخ',
    'Actions',
  ]
  constructor(private router: ActivatedRoute, private service: SliderService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.slides.sliders;
      }
    )
  }

  async delete(id) {
    this.loading = true;
    const data = await this.service.delete(id);
    this.data = this.data.filter(c => c.id != id);
    this.generic.showNotification('success', lang.ar.delteTitle, lang.ar.delteMsg)
    this.loading = false;
  }  

}
