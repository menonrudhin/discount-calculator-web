import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { isNumericLiteral, NumericLiteral } from 'typescript';

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

  constructor() { 
    this.fromValue = 'CAD';
    this.toValue = 'INR';
    this.toCurrencyAmount = '0';
    this.fromCurrencyAmount = '10';
    this.exchangeRate = 57;

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
