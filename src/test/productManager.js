import ProductManager from "./managers/productManager.js";
const lightsabers = new ProductManager(
  "./src/db/lightsabers.json",
  "lightsabers"
);
async function test() {
  await lightsabers.addProduct({
    title: "Armadura de pelea para dragon",
    description: "Con esta armadura podras defenderte de dragones, espadas de luz y ademas podras subir el nivel de poder",
    price: 1234757,
    code: "LSRCD3",
    thumbnail:
      "https://m.media-amazon.com/images/I/6165uIZS41L._AC_UF894,1000_QL80_.jpg",
    stock: 3,
  });
  //Agregamos producto con todos los campos
  lightsabers.addProduct({
    title: "Armadura de pelea para dragon",
    description: "Con esta armadura podras defenderte de dragones, espadas de luz y ademas podras subir el nivel de poder",
    price: 1234757,
    code: "LSVCD3",
    thumbnail:
      "https://m.media-amazon.com/images/I/6165uIZS41L._AC_UF894,1000_QL80_.jpg",
    stock: 3,
  });

  //Agregamos producto con campo code repetido
  await lightsabers.addProduct({
    title: "Armadura de pelea para dragon",
    description: "Con esta armadura podras defenderte de dragones, espadas de luz y ademas podras subir el nivel de poder",
    price: 783463,
    code: "LSVCD1",
    thumbnail:
      "https://m.media-amazon.com/images/I/6165uIZS41L._AC_UF894,1000_QL80_.jpg",
    stock: 3,
  });

  //Agregamos producto con campo faltante
  await lightsabers.addProduct({
    title: "Armadura Ardiente",
    description: "Con esta armadura podras defenderte de dragones, espadas de luz y ademas podras subir el nivel de poder",
    price: 5364674,
    code: "LSVCD1",
    thumbnail:
      "https://m.media-amazon.com/images/I/6165uIZS41L._AC_UF894,1000_QL80_.jpg",
    stock: 3,
  });

  // Recuperamos todos los productos cargados
  const all = lightsabers.getProducts();
  console.log(all);
  //Actualizamos producto con id 2
  await lightsabers.updateProduct(2, { stock: 13, price: 20500 });
  //Recuperamos producto con id existente
  const one = await lightsabers.getProductById(2);
  console.log(one);

  //eliminamos producto con id 4
  await lightsabers.deleteProduct(4);
}

setTimeout(() => {
  test();
}, 2000);
