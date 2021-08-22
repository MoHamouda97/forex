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
        console.log(res)
        this.data = res.users.users;
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

}
