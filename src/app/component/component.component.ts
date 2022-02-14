import { Component, OnInit } from '@angular/core';

@Component({
/*   selector: '[app-component]', */

selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  serverId = 10 ;
  status = "offline";
  allowNew = true ;

  getId(){

  return this.serverId ;

  }

  public titulo:string ;
  public num1:number;
  public num2:number;
  public resultado:any;
  public historial:Array<string>;
  public toggleButton: boolean = false;
 
  

  constructor() { 
     this.titulo =  "Calculadora simple" ;
    this.num1 = 0 ;
    this.num2 = 0 ; 
    this.resultado = 0 ;
    this.historial = [] ;
     

  }

  ngOnInit(): void {
  
  }

  sumar(): void {
  this.resultado = Number(this.num1) + Number(this.num2) ;
  this.historial.push(`${this.num1} +  ${this.num2} = ${this.resultado} `)
  }


  multiplicar(): void {
    this.resultado = Number(this.num1) * Number(this.num2) ;
    this.historial.push(`${this.num1} *  ${this.num2} = ${this.resultado} `)
    }


    restar(): void {
      this.resultado = Number(this.num1) - Number(this.num2) ;
      this.historial.push(`${this.num1} -  ${this.num2} = ${this.resultado} `)
      }

      dividir(): void {
        this.resultado = Number(this.num1) / Number(this.num2) ;
        this.historial.push(`${this.num1} /  ${this.num2} = ${this.resultado} `)
        }



        bin(): void {
          this.resultado = `${Number(this.num1)} en beinario resulta ${Number(this.num1).toString(2)}` ;
          this.historial.push(` ${this.resultado} `)
          this.toggleButton = true
 
          }



  limpia(): void{

    this.historial = [] ;
    this.resultado = 0 ;
    this.num1 = 0 ;
    this.num2 = 0 ; 
    this.toggleButton = false
    }


}
