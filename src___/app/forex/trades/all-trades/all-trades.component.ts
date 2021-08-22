import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import { TradesService } from 'src/services/trades/trades.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-all-trades',
  templateUrl: './all-trades.component.html',
  styleUrls: ['./all-trades.component.css']
})
export class AllTradesComponent implements OnInit {

  data: any[] = [];
  loading: boolean = false;
  header: any[] = [
    '#',
    'العملة',
    'سعر البيع',
    'سعر الشراء',
    'توقف الربح',
    'توقف الخسارة',
    'VIP',
    'ملاحظات',
    'التاريخ',
    'Actions',
  ]
  constructor(private router: ActivatedRoute, private service: TradesService, private generic: GenericService, private route: Router) { }

  ngOnInit() {
    this.router.data.subscribe(
      res => {
        this.data = res.trades.trades;
        console.log(this.data)
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
    this.route.navigate([`/trad/edit/${id}`]);
    localStorage.setItem('obj', JSON.stringify(object))
  }  


}
