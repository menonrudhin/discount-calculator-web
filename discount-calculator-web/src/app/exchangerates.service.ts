import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeratesService {

  api_key: string = 'ZVmXN8Ss22WvKMYGKnQ2B0L5O1VfjuVa';
  configUrl: string = 'https://api.apilayer.com/exchangerates_data/convert?';

  constructor(private http: HttpClient) {
  }

  public getExchangeRate(fromCurrency: string, toCurrency: string) {
    var myHeaders = new HttpHeaders();
    myHeaders.append("apikey", this.api_key);

    return this.http.get(this.configUrl + 'to='+toCurrency+'&from='+fromCurrency+'&amount=' + 100, {headers : myHeaders});
  }
}
