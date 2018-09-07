import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  ngOnInit() {
  }

  addHero(num: number) {
    if (!num) { return; }
    const hero = { name: num, canFly: ((num > 100) ? true : false) };
    this.heroes.push(hero);
  }

  reset() {
    this.heroes = [];
  }

}
