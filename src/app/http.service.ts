import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = '/assets/data/transactions.json';

  constructor(private http: HttpClient) {}
  
  getTransactions() {
    return this.http.get(this.url);
  }

  getDetail(param: string) {
    let url2 = '/assets/data/'+param+'.json';
    return this.http.get(url2);
  }
}
