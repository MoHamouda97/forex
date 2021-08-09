import { CurranciesService } from './../../../../services/currancies/currancies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-currancies',
  templateUrl: './all-currancies.component.html',
  styleUrls: ['./all-currancies.component.css']
})
export class AllCurranciesComponent implements OnInit {
  data: any[] = [];
  pages: any = {};
  loading: boolean = false;
  header: any[] = [
    '#',
    'العملة',
    'سعر البيع',
    'سعر الشراء',
    'التاريخ',
    'Actions',
  ]

  constructor(private router: ActivatedRoute, private service: CurranciesService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.currancies.data;
        this.pages = res.currancies.pagination;
      }
    )
  }

  async onPageChange(page) {
    this.loading = true;
    const data: any = await this.service.get(page).toPromise();
    this.data = data.data;
    this.loading = false;
  } 
  
  async delete(id) {
    this.loading = true;
    const data = await this.service.delete(id);
    this.data = this.data.filter(c => c.id != id);
    this.generic.showNotification('success', lang.ar.delteTitle, lang.ar.delteMsg)
    this.loading = false;
  } 
  
  goToEdit(id, object) {
    this.route.navigate([`/currancies/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }  

}
