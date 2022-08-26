import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://lucas.treinamento.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/400/200/nature';

  //Estou recuperando esse metodo atraves de interpolação no meu template
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
