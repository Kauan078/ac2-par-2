import { Component } from '@angular/core';

interface Burger {
  name: string;
  price: number;
  image: string;
  likes: number;
}

@Component({
  selector: 'app-menu',
  template: `
   <h1>Hamburgueria Silveira</h1>
    <h2>Cardápio da Hamburgueria</h2>
    <div class="burgers-container">
      <div *ngFor="let burger of burgers" class="burger-item">
        <img [src]="burger.image" alt="{{ burger.name }}" width="300" height="200">
        <div class="burger-details">
          <h3>{{ burger.name }}</h3>
          <p>{{ burger.price | currency }}</p>
          <button (click)="likeBurger(burger)">Curtir</button>
          <p>{{ burger.likes }} curtidas</p>
        </div>
      </div>
    </div>
  `,
  styles: [`

    .burgers-container {
      display: flex;
      flex-wrap: wrap;
      background-color: #fa4f00;;
      padding: 20px;
    }

    .burger-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 80px;
    }

    .burger-details {
      text-align: center;
    }
  `]
})
export class MenuComponent {
  burgers: Burger[] = [
    {
      name: 'Hambúrguer Tradicional',
      price: 14,
      image: 'https://topview.com.br/wp-content/uploads/2019/04/Smoked-Burger-Brisket-Smokehouse-Foto-Hana-Lidia-4.jpg' ,
      likes: 0
    },

    {
      name: 'Hambúrguer Vegano',
      price: 18,
      image: 'https://s2.glbimg.com/fBiB3TLGUkDC-cO3Oz2NT9xM8xo=/smart/e.glbimg.com/og/ed/f/original/2016/06/09/hamburguer_vegetariano_madero_-_jpg.jpg',
      likes: 0
    },

    {
      name: 'Hambúrguer Duplo',
      price: 18,
      image: 'https://i.pinimg.com/736x/a2/5d/b1/a25db145a1ec08e1db73c0afed6a3cf1.jpg',
      likes: 0
    },

    {
      name: 'Hambúrguer de Bacon',
      price: 16,
      image: 'https://www.guiadasemana.com.br/contentFiles/image/2022/08/FEA/69017_mania-de-churrasco-cheese-burger-bacon-credito-mario-rodrigues.jpg',
      likes: 0
    }
  ];

  likeBurger(burger: Burger) {
    burger.likes++;
  }
}
