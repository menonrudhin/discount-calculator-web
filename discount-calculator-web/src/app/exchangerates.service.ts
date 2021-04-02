import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeratesService {

  api_key : string = '8dcb4c0a8b8d30eb018d0e95818d5ece';
  configUrl : string = 'http://api.exchangeratesapi.io/v1/latest?access_key=';

  constructor(private http : HttpClient) {
  }

  public getExchangeRate(fromCurrency : string, toCurrency : string) {
    return this.http.get(this.configUrl + this.api_key + '&symbols=' + fromCurrency + ',' + toCurrency);    
  }
}
