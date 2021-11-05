import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  title = 'Détails de la transaction';
  transactions: any;
  param='';

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.route.snapshot.params['id'];
    this.httpService.getDetail(this.param).subscribe(
      (response) => { this.transactions = response; },
      (error) => { console.log(error); });
  }
}


