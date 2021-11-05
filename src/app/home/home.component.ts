import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import {Sort} from '@angular/material/sort';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Les transactions';
  transactions : any;

  constructor(private httpService: HttpService) { }
  
  ngOnInit() {
    this.httpService.getTransactions().subscribe(
    (response) => { this.transactions = response; },
    (error) => { console.log(error); });
  }
}
