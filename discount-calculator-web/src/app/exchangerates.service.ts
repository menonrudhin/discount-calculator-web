import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeratesService {

  configUrl : string = 'https://api.exchangeratesapi.io/latest?';

  constructor(private http : HttpClient) {
  }

  public getExchangeRate(fromCurrency : string, toCurrency : string) {
    return this.http.get(this.configUrl + 'base=' + fromCurrency + '&symbols=' + toCurrency);
  }
}
