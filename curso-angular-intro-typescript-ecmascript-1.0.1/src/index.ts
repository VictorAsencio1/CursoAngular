/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE ARGUMENTOS

interface Producto {
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

function calculaISV(productos: Producto[]) {
  //ISV = Impuestos sobre ventas

  let total = 0;

  productos.forEach((producto) => {
    total += producto.precio;
  });

  return total * 0.15;
}

const articulos = [telefono, tableta];
const isv = calculaISV(articulos);
