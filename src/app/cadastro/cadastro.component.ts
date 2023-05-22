import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Cliente {
  nome: string;
  celular: string;
  email: string;
  hamburguer: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cliente: Cliente = {
    nome: '',
    celular:'',
    email: '',
    hamburguer: ''
  };

  burgers = [
    { name: 'Hambúrguer Clássico', price: 10.99, image: 'caminho/para/imagem1.jpg' },
    { name: 'Hambúrguer Vegetariano', price: 9.99, image: 'caminho/para/imagem2.jpg' },
    { name: 'Hambúrguer Duplo', price: 12.99, image: 'caminho/para/imagem3.jpg' },
    { name: 'Hambúrguer com Bacon', price: 11.99, image: 'caminho/para/imagem4.jpg' },
  ];


  constructor(private router: Router) {}

  submitForm() {

    this.router.navigate(['/menu']);
  }
}
