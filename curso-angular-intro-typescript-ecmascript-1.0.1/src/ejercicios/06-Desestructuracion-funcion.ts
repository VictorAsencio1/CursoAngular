/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE ARGUMENTOS

export interface Producto { //Se exporta a archivo 07
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  desc: "iPad Air",
  precio: 350,
};

export function calcularISV(productos: Producto[]): [number, number] {
  //ISV = Impuestos sobre ventas

  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  //return total * 0.15;
  return [total, total * 0.15];
}

const articulos = [telefono, tableta];
const [total, isv] = calcularISV(articulos);

console.log('Total: ', total);
console.log('ISV: ', isv);