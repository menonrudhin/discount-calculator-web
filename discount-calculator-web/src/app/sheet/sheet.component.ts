import { Component, OnInit } from '@angular/core';
import { RowModel } from '../model/row-model';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  rows:RowModel[] = [];
  public txtYouSave:string;
  public txtTax:string;
  public txtTotal:string;

  constructor() { 
    this.rows = [{
      txtPrice : '0',
      txtDiscount : '0',
      txtAmount : '0'      
    }];

    this.txtYouSave='0';
    this.txtTax='0';
    this.txtTotal='0';
  }

  ngOnInit(): void {
    this.txtYouSave='0';
    this.txtTax='0';
    this.txtTotal='0';
  }

  onTxtPriceChange(txtPrice:string,index:number){
    this.rows[index].txtPrice=txtPrice;
    console.log('set new price',this.rows[index].txtPrice,' , index = ', index);
    this.calculateRow(this.rows[index]);
    this.calculateResult();
  }

  onTxtDiscountChange(txtDiscount:string,index:number){
    this.rows[index].txtDiscount=txtDiscount;
    console.log('set new discount',this.rows[index].txtDiscount,' , index = ', index);
    this.calculateRow(this.rows[index]);
    this.calculateResult();
  }

  onTxtTaxChange(txtTax:string){
    this.txtTax=txtTax;
    console.log('set new Tax',this.txtTax);
    this.calculateResult();
  }

  calculateRow(rowModel : RowModel){
    let price = Number(rowModel.txtPrice);
    let discount = Number(rowModel.txtDiscount);
    let amount = price - (price * (discount/100));
    console.log('new amount', amount);
    rowModel.txtAmount = String(amount);    
  }

  calculateResult(){
    let price:number = 0;
    let amount:number = 0;
    let youSave:number = 0;
    let total:number = 0;
    let actualTotal:number = 0;
    let tax:number = Number(this.txtTax);
    this.rows.forEach(function (e) {
      price = Number(e.txtPrice);
      amount = Number(e.txtAmount);
      
      total+=amount;
      actualTotal+=price;
    });
    total = total + (total*(tax/100));
    actualTotal = actualTotal + (actualTotal * (tax/100));
    youSave = actualTotal - total;
    this.txtYouSave = youSave+'';
    this.txtTotal = total+'';
    console.log('calculate result , ',this.txtYouSave,' , ',this.txtTax,' , ',this.txtTotal);
  }

  onAddRow(){
    let row = new RowModel('0','0','0');
    this.rows.push(row);
    this.calculateResult();
  }

  onRemoveRow(index:number){
    if(this.rows.length > 1) {
      this.rows.splice(index,1);
      this.calculateResult();  
    }
  }

}
