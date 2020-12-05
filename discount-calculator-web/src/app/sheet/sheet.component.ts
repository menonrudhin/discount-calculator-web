import { Component, OnInit } from '@angular/core';
import { RowModel } from '../model/row-model';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  rows:RowModel[] = [];

  constructor() { 
    this.rows = [{
      txtPrice : '100',
      txtDiscount : '20',
      txtAmount : '80'      
    },{
      txtPrice : '100',
      txtDiscount : '30',
      txtAmount : '70' 
    },{
      txtPrice : '100',
      txtDiscount : '50',
      txtAmount : '50' 
    }];
  }

  ngOnInit(): void {
  }

  onTxtPriceChange(txtPrice:string,index:number){
    this.rows[index].txtPrice=txtPrice;
    console.log('set new price',this.rows[index].txtPrice,' , index = ', index);
    this.calculate(this.rows[index]);
  }

  onTxtDiscountChange(txtDiscount:string,index:number){
    this.rows[index].txtDiscount=txtDiscount;
    console.log('set new discount',this.rows[index].txtDiscount,' , index = ', index);
    this.calculate(this.rows[index]);
  }

  calculate(rowModel : RowModel){
    let price = Number(rowModel.txtPrice);
    let discount = Number(rowModel.txtDiscount);
    let amount = price - (price * (discount/100));
    console.log('new amount', amount);
    rowModel.txtAmount = String(amount);
  }

}
