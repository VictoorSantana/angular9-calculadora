import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /*
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  */

  constructor() { }



  calcular(valor1: number, valor2: number, operacao: string ): number {
    //let só vê dentro do escopo
    let resultado: number = 0;

    switch(operacao) {
      case '+':
        resultado = valor1 + valor2
      break;
      case '-':
        resultado = valor1 - valor2
      break;
      case '/':
        resultado = valor1 / valor2
      break;
      case '*':
        resultado = valor1 * valor2
      break;
      default: 
        resultado = 0;
    }

    return resultado;
  }


}
