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
      let properties = Object.getOwnPropertyNames(res.rates);            
      let property= properties[0];      
      this.exchangeRate = res.rates[property];
      console.log(this.fromValue,' to ',this.toValue,' exchange rate fetched = ',this.exchangeRate);
    });
    this.exchangeRate = 0; // will be overriden by the exchange rate fetched from the API
    this.currencies = [{symbol: 'CAD',from : true,to : false},{symbol: 'INR',from : false,to : true},
    {symbol: 'USD',from : false,to : false},{symbol: 'GBP',from : false,to : false},
    {symbol: 'AUD',from : false,to : false},{symbol: 'BRL',from : false,to : false},
    {symbol: 'CNY',from : false,to : false},{symbol: 'AED',from : false,to : false}].sort();
    this.calculate();
  }

  ngOnInit(): void {
    setInterval(()=>{this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      let properties = Object.getOwnPropertyNames(res.rates);            
      let property= properties[0];      
      this.exchangeRate = res.rates[property];
      console.log(this.fromValue,' to ',this.toValue,' exchange rate fetched = ',this.exchangeRate);
      this.calculate();
    })},10000);
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
      let properties = Object.getOwnPropertyNames(res.rates);            
      let property= properties[0];      
      this.exchangeRate = res.rates[property];
      console.log(this.fromValue,' to ',this.toValue,' exchange rate fetched = ',this.exchangeRate);
      this.calculate();
    });
  }

  onToCurrencySelection(event : any) {
    console.log(event.target.value);
    this.toValue=event.target.value;
    this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      let properties = Object.getOwnPropertyNames(res.rates);            
      let property= properties[0];      
      this.exchangeRate = res.rates[property];
      console.log(this.fromValue,' to ',this.toValue,' exchange rate fetched = ',this.exchangeRate);
      this.calculate();
    });
  }
}
