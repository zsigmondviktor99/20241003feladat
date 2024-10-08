import { Component } from '@angular/core';

@Component({
  selector: 'app-butorok',
  templateUrl: './butorok.component.html',
  styleUrl: './butorok.component.css'
})
export class ButorokComponent {
  cikkszam: string = "";
  megnevezes: string = "";
  ar: number = 0;
  db: number = 0;

  butorok: Butor[] = [];

  felvitel(): void {
    var b: Butor = {
      cikkszam: this.cikkszam,
      megnevezes: this.megnevezes,
      ar: this.ar,
      db: this.db
    };

    this.butorok.push(b);

    this.cikkszam = "";
    this.megnevezes = "";
    this.ar = 0;
    this.db = 0;
  }
}

export interface Butor {
  cikkszam: string;
  megnevezes: string;
  ar: number;
  db: number;
}