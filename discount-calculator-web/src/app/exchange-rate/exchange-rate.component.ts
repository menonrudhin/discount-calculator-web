import { getNumberOfCurrencyDigits } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { isNumericLiteral, NumericLiteral } from 'typescript';
import { ExchangeratesService } from '../exchangerates.service';

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

  constructor(private exchangeRateService : ExchangeratesService) { 
    this.fromValue = 'CAD';
    this.toValue = 'INR';
    this.toCurrencyAmount = '0';
    this.fromCurrencyAmount = '10';
    this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {    // fetch latest exchange rate from the API  
      let properties = Object.getOwnPropertyNames(res.rates);            
      let property= properties[0];      
      this.exchangeRate = res.rates[property];
      console.log(this.fromValue,' to ',this.toValue,' exchange rate fetched = ',this.exchangeRate);
    });
    this.exchangeRate = 0; // will be overriden by the exchange rate fetched from the API

  }

  ngOnInit(): void {
    
  }

  ngOnChanges() : void {
    let fromVal = Number(this.fromCurrencyAmount);
    let toVal = fromVal*this.exchangeRate;
    console.log('converted = ',toVal);
    this.toCurrencyAmount = toVal+'';    
  }
}
