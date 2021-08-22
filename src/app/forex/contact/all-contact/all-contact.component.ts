import { ContactService } from './../../../../services/contact/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
  data: any[] = [];
  pages: any = {};
  loading: boolean = false;
  header: any[] = [
    '#',
    'المنصة',
    'URL',
    'اللوجو',
    'التاريخ',
    'Actions',
  ]
  constructor(private router: ActivatedRoute, private service: ContactService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.contacts.contacts;
        //this.pages = res.contacts.pagination;
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
    this.route.navigate([`/contact/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }

}
