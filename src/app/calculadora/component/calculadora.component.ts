import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(
    private calculadoraService: CalculadoraService
  ) { }
  
  valorDef: number = 0;
  campoValor: string = '0';
  operacao: string = '';


  ngOnInit(): void {
      //this.campoValor = this.calculadoraService.calcular(2, 3, '+');
  }


  allclear(): void {    
    this.valorDef = 0;
    this.operacao = '';
    this.campoValor = '0';
  }

  setValor(valor: number): void {
    if(this.campoValor == '0') {
      this.campoValor = valor.toString();
    } else {
      this.campoValor += valor.toString();
    }    
  }

  setOp(op: string): void {
    this.operacao = op;
    this.valorDef = Number(this.campoValor);    
    this.campoValor = '0';
  }

  handleIgual(): void {    
    this.campoValor = this.calculadoraService  
    
    .calcular(this.valorDef, Number(this.campoValor), this.operacao)
    .toString();
  }

}
