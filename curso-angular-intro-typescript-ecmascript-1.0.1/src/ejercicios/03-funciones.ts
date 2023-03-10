/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number) => {
  return a + b;
};

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
  //numero: OBLIGATORIO, otroNumero: OPCIONAL(?), base: ARGUMENTO CON VALOR POR DEFECTO
  return numero * base;
}

/*
//const resultado = sumar(10, 20);
const resultado = multiplicar(5, 10);
const resultadoTodosLosArgumentos = multiplicar(5, 0, 10); //10 es el valor de base
console.log(resultado);
console.log(resultadoTodosLosArgumentos);
*/

//Funcion para curar un personaje
interface personajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void; //Se define una función
}

function curar(personaje: personajeLOR, puntosDeVidaCurar: number): void {
  //void indica que no va a retornar nada
  personaje.pv += puntosDeVidaCurar;  
}

const nuevoPersonaje: personajeLOR = {
  nombre: "Strider",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida: ", this.pv);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();