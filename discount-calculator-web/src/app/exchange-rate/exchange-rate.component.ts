import { getNumberOfCurrencyDigits } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { isNumericLiteral, NumericLiteral } from 'typescript';
import { ExchangeratesService } from '../exchangerates.service';
import { CurrencyModel } from '../model/currency-model';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit,OnChanges {

  fromValue : string;
  toValue : string;
  toCurrencyAmount : string;
  @Input() fromCurrencyAmount : string;
  exchangeRate : number;
  currencies:CurrencyModel[];

  constructor(private exchangeRateService : ExchangeratesService) { 
    this.fromValue = 'CAD';
    this.toValue = 'INR';
    this.toCurrencyAmount = '0';
    this.fromCurrencyAmount = '0';
    this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      this.parseExchangeRate(res);
    });
    this.exchangeRate = 0; // will be overriden by the exchange rate fetched from the API
    this.currencies = [{symbol: 'CAD',from : true,to : false},{symbol: 'INR',from : false,to : true},
    {symbol: 'USD',from : false,to : false},{symbol: 'GBP',from : false,to : false},
    {symbol: 'AUD',from : false,to : false},{symbol: 'BRL',from : false,to : false},
    {symbol: 'CNY',from : false,to : false},{symbol: 'AED',from : false,to : false}].sort();
    this.calculate();
  }

  ngOnInit(): void {
    // commented because free tier API allows only 250 calls per month
    /*setInterval(()=>{this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      this.parseExchangeRate(res);
      this.calculate();
    })},10000);*/
    console.log('discount-calculator-web v0.4');
  }

  ngOnChanges() : void {
    this.calculate();
  }

  calculate(){
    let fromVal = Number(this.fromCurrencyAmount);
    let toVal = fromVal*this.exchangeRate;
    console.log('converted = ',toVal);
    this.toCurrencyAmount = toVal+'';    
  }

  onFromCurrencySelection(event : any) {
    console.log(event.target.value);
    this.fromValue=event.target.value;
    this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      this.parseExchangeRate(res);
      this.calculate();
    });
  }

  onToCurrencySelection(event : any) {
    console.log(event.target.value);
    this.toValue=event.target.value;
    this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      this.parseExchangeRate(res);
      this.calculate();
    });
  }

  /**
   * Parse / extract exchange rate from the http response
   */
  parseExchangeRate(res : any) {
    let properties = Object.getOwnPropertyNames(res.rates);            
    let property_1= properties[0];
    let property_2= properties[1];
    let exchangeRate_1 = Number(res.rates[property_1]);
    let exchangeRate_2 = Number(res.rates[property_2]);
    this.exchangeRate =  exchangeRate_2 / exchangeRate_1;
    console.log(this.fromValue,' to ',this.toValue,' exchange rate fetched = ',this.exchangeRate);
  }
}
