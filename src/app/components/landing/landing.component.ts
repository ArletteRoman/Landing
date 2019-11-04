import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public offers = [];
  public dishes = [];
  public gallery = [];
  public news = [];
  constructor() { }

  ngOnInit() {
    this.offers = [
      {
        title: 'Alaskan Fish & Chips',
        desc: 'Served with soy sauce, wasabi, pickled ginger and chopsticks',
        price: 14,
        rating: 0
      },
      {
        title: 'Fishermen’s Basket',
        desc: 'Snow crab, avocado, cucumber, tobiko, Japanese mayonnaise',
        price: 7,
        rating: 0
      },
      {
        title: 'Chicken Breat Saute Sec',
        desc: 'A Latte is a coffee drink made with espresso and steamed milk',
        price: 5,
        rating: 0
      },
      {
        title: 'Crisp Pork Belly',
        desc: 'Candied salmon, basil potato puree, baby kale marsala',
        price: 18,
        rating: 0
      }
    ];
    this.dishes = [
      {
        title: 'Huitlacoche Tamle',
        desc: 'Served pickled ginger and chopsticks',
        price: 14,
        rating: 0
      },
      {
        title: 'Creole Tempeh',
        desc: 'Served with soy sauce, wasabi, pickled  chopsticks',
        price: 19,
        rating: 0
      },
      {
        title: 'Polenta Nera Cake',
        desc: 'Served with soy sauce, wasabi, pickled ginger',
        price: 13,
        rating: 0
      },
      {
        title: 'Mediterranean Salad',
        desc: 'Soy sauce, wasabi, pickled ginger and chopsticks',
        price: 17,
        rating: 0
      },
      {
        title: 'Pumpkin Curry',
        desc: 'Sauce, wasabi, pickled ginger and chopsticks',
        price: 22,
        rating: 0
      },
      {
        title: 'Warm Kipfler Potato',
        desc: 'Wasabi, pickled ginger and chopsticks',
        price: 24,
        rating: 0
      }
    ];
    this.gallery = [
      'assets/images/g1.png',
      'assets/images/g2.png',
      'assets/images/g3.png',
      'assets/images/g4.png',
      'assets/images/g5.png',
      'assets/images/g6.png',
    ];
    this.news = [
      {
        name: 'The New York Times',
        image: 'assets/icons/times.svg',
        body: '"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."'
    },
    {
      name: 'The Guardian',
      image: 'assets/icons/guardian.svg',
      body: '"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."'
  },
  {
    name: 'The Wall Street Journal',
    image: 'assets/icons/journal.svg',
    body: '"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."'
}
    ];
  }

}
