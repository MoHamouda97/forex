import { UserSubService } from 'src/services/user-sub/user-sub.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-user-sub',
  templateUrl: './all-user-sub.component.html',
  styleUrls: ['./all-user-sub.component.css']
})
export class AllUserSubComponent implements OnInit {
  data: any[] = [];
  pages: any = {};
  loading: boolean = false;
  header: any[] = [
    '#',
    'الاسم',
    'نوع الاشتراك',
    'المدة',
    'تاسعر',
    'التاريخ',
    'Actions',
  ]

  constructor(private router: ActivatedRoute, private service: UserSubService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.usersub.data;
        this.pages = res.usersub.pagination;
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
    this.route.navigate([`/usersub/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  } 

}
