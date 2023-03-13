/*
    ===== Código de TypeScript =====
*/

class Heroe {
  alterEgo: String;
  edad: number;
  nombreReal: number;

  constructor(alterEgo: string) {
    this.alterEgo = alterEgo;
  }
}

//Forma corta de declarar una clase
class HeroeFormaCorta {
  constructor(
    alterEgo: string,
    edad: number,
    nombreReal: number
  ) { }
}

const ironman = new Heroe('Ironman');
console.log(ironman);