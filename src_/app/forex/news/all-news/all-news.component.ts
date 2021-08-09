import { NewsService } from './../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  data: any[] = [];
  loading: boolean = false;
  header: any[] = [
    '#',
    'العنوان',
    'الوصف',
    'الصورة',
    'التاريخ',
    'Actions',
  ]
  constructor(private router: ActivatedRoute, private service: NewsService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        console.log(res);
        this.data = res.news.news;
      }
    )
  }

  async delete(id) {
    this.loading = true;
    const data = await this.service.delete(id);
    this.data = this.data.filter(n => n.id != id);
    this.generic.showNotification('success', lang.ar.delteTitle, lang.ar.delteMsg)
    this.loading = false;
  }

  goToEdit(id, object) {
    this.route.navigate([`/news/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }  

}
