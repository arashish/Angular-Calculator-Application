import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public result: string;
  public getNumbers: string;
  public op: string;
  public num1: number;
  public num2: number;
  
  constructor() { 
    this.result = '0';
    this.getNumbers = '';
  }

  public setNumbers(getSingleNum: string)
  {   
      if (this.result != "0"){ //if the first number is 0 no need to add zero infront of it
        this.getNumbers = this.getNumbers + getSingleNum;
        this.result = this.getNumbers;
      }else {
        this.getNumbers = getSingleNum;
        this.result = this.getNumbers;
      }
  }

  public setOperator(getOp: string)
  {
    this.op = getOp;
    this.num1 = Number(this.result);
    this.getNumbers = '';
  }

  public sqRoot()
  {
    this.result = (Math.sqrt(Number(this.result))).toString();
    this.getNumbers = '';
  }

  public calculate()
  {
    this.num2 = Number(this.result);
    switch(this.op)
    {
      case "+":
        this.result = (this.num1 + this.num2).toString();
        this.getNumbers = '';
        break; 
      case "-":
        this.result = (this.num1 - this.num2).toString();
        this.getNumbers = '';
        break;
      case "/":
        this.result = (this.num1 / this.num2).toString();
        this.getNumbers = '';
        break;
      case "*":
        this.result = (this.num1 * this.num2).toString();
        this.getNumbers = '';
        break;
      case "^":
        this.result = (Math.pow(this.num1, this.num2)).toString();
        this.getNumbers = '';
        break;
      default:
        break;
    }
  }

  clear (){
    this.result = "0";
    this.getNumbers = "";
    this.op = "";
    this.num1 = 0;
    this.num2 = 0;
  }

  ngOnInit() {
  }

}
