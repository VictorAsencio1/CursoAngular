/*
    ===== Código de TypeScript =====
*/

//let habilidades: string[] = ['Bash', 'Counter', 'Healing']; SOLO string
let habilidades: (boolean | string | number)[] = ["Bash", "Counter", "Healing"];
habilidades.push("V"); //Asignando valor

//Objetos
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string; //El signo ? indica que el valor es opcional
}

const personaje: Personaje = {
  nombre: "Strinder",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.puebloNatal = "Pueblo paleta";

const personaje2: any = {
  //No es de tipo Personaje(Interface) es de tipo "any" por tal motivo permite agregar puebloNatal2
  nombre: "Strinder",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje2.puebloNatal2 = "San Salvador"; //personaje2 es de tipo "any" por tal motivo permite agregar puebloNatal2 o mas elementos

console.table(personaje);
console.log(personaje);