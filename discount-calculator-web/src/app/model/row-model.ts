export class RowModel {

    constructor(public txtPrice:string,public txtDiscount:string,public txtAmount:string){
        this.txtPrice='0';
        this.txtDiscount='0';
        this.txtAmount='0';        
    }

    // public get txtPrice(){
    //     return this._txtPrice;
    // }

    // public set txtPrice(txtPrice:string){
    //     this._txtPrice=txtPrice;
    // }

    // public get txtDiscount(){
    //     return this._txtDiscount;
    // }

    // public set txtDiscount(txtDiscount:string){
    //     this._txtDiscount=txtDiscount;
    // }

    // public get txtAmount(){
    //     return this._txtAmount;
    // }

    // public set txtAmount(txtAmount:string){
    //     this._txtAmount=txtAmount;
    // }

    // public calculate() : boolean {        
    //     this._txtAmount = '100';
    //     return true;
    // }
}