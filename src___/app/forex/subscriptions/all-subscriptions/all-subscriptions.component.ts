import { SubscriptionsService } from './../../../../services/subscriptions/subscriptions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-subscriptions',
  templateUrl: './all-subscriptions.component.html',
  styleUrls: ['./all-subscriptions.component.css']
})
export class AllSubscriptionsComponent implements OnInit {
  data: any[] = [];
  pages: any = {};
  loading: boolean = false;
  header: any[] = [
    '#',
    'الاسم',
    'المدة',
    'التاريخ',
    'Actions',
  ]

  constructor(private router: ActivatedRoute, private service: SubscriptionsService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.subscriptions.data;
        this.pages = res.subscriptions.pagination;
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
    this.route.navigate([`/sub/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }    

}
