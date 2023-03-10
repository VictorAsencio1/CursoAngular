/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE OBJETOS
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

//EN LÍNEAS SEPARADAS (RECOMENDADO PARA MEJOR COMPRENSIÓN)
//Volumen: vol (Cambia el nombre a "vol")
const { volumen: vol, segundo, cancion, detalles } = reproductor; //Desestructuración, si no se hace esto se tendria que acceder: reproductor.volumen, reproductor.segundo, reproductor.cancion
const { autor } = detalles;

//EN UNA SOLA LÍNEA
//const { volumen, segundo, cancion, detalles:{autor} } = reproductor;

// console.log("El volumen actual es: ", vol);
// console.log("El segundo actual es: ", segundo);
// console.log("La canción actual es: ", cancion);
// console.log("El autor actual es: ", autor);

//DESESTRUCTURACIÓN DE ARREGLOS
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = dbz; //En el caso de los arreglos se define la posición

console.log("Personaje 1:", p1);
console.log("Personaje 2:", p2);
console.log("Personaje 3:", p3);

//En caso se desee definir uno de los objetos del arreglo se dejan vacios los demas
const [, , p4] = dbz; //p4=Trunks
console.log("Personaje 4: ", p4);
