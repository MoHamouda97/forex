import { UsersService } from 'src/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  data: any[] = [];
  pages: any = {};
  loading: boolean = false;
  header: any[] = [
    '#',
    'الاسم',
    'العنوان',
    'الايميل',
    'رقم الهاتف',
    'التاريخ',
    'Actions',
  ]

  constructor(private router: ActivatedRoute, private service: UsersService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.users.users;
        this.pages = res.users.pagination;
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

  goToEdit(id, object) {
    this.route.navigate([`/users/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }  

  async onPageChange(page) {
    this.loading = true;
    const data: any = await this.service.get(page).toPromise();
    this.data = data.users;
    this.loading = false;
  }   

}
