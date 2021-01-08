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
    this.exchangeRateService.getExchangeRate(this.fromValue,this.toValue).subscribe((res : any) => {
      //console.log('http response = ',res);
      let properties = Object.getOwnPropertyNames(res.rates)            
      let property :string = "'" + properties[0] + "'";
      console.log(property);
      console.log(res.rates[property]);
      this.exchangeRate = res.rates['INR'];
      console.log(this.exchangeRate);
    });
    this.exchangeRate = 0;

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
