import { NotificationsService } from './../../../../services/notifications/notifications.service';
import { Component, OnInit } from '@angular/core';
import * as lang from './../../../../settings/lang';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.css']
})
export class AllNotificationsComponent implements OnInit {
  data: any[] = [];
  users: any[] = [];
  pages: any = {};
  loading: boolean = false;
  header: any[] = [
    '#',
    'نص',
    'الصورة',
    'التاريخ',
    'Actions',
  ]
  constructor(private router: ActivatedRoute, private service: NotificationsService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.notifications.data;
        this.pages = res.notifications.pagination;
        this.users = res.users.users;
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
    this.route.navigate([`/notifications/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }  

  async onPageChange(page) {
    this.loading = true;
    const data: any = await this.service.get(page).toPromise();
    this.data = data.data;
    this.loading = false;
  }  

  returnUser(user_id: number) {
    let user = this.users.filter(user => user.id == user_id);
    return user[0].username;
  }

}
