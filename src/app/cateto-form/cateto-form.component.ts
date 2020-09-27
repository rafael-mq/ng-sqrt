import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cateto-form',
  templateUrl: './cateto-form.component.html',
  styleUrls: ['./cateto-form.component.css']
})
export class CatetoFormComponent implements OnInit {
  catetoA: number = 0;
  catetoB: number = 0;
  hipotenusa: string = "0";
  mensagem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    this.mensagem = "calculando..."
    setTimeout(() => {
      this.mensagem = ""
      this.hipotenusa = Math.sqrt(this.catetoA**2 + this.catetoB**2).toFixed(2);
    }, 2000);
    
  }

}
