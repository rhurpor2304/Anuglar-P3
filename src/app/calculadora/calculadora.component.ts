import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public numero1: number = 0;
  public numero2: number = 0;
  public mensaje: string = "";

  restar(): void{
    this.mensaje = `El resultado es ${this.numero1 - this.numero2}`
  }

  sumar(): void {
    this.mensaje = `El resultado es ${Number(this.numero1) + Number(this.numero2)}`
  }
}
