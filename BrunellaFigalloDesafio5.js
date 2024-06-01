let productos = [
    { name: "lechuga", precio:6000, stock: 22 }, 
    { name: "tomate", precio: 4000, stock: 11 }, 
    { name: "zanahoria", precio: 2000, stock: 27 }, 
    { name: "rucula", precio: 3000, stock: 5 }, 
    { name: "zapallo", precio: 7000, stock: 9 }, 
    { name: "papines", precio: 8000, stock: 14 }
];

for (let index = 0; index < productos.length; index++) {
    console.log(`${productos[index].name} - precio : ${productos[index].precio}
    - stock : ${productos[index].stock} `);
}

console.log("-------------------------------------------------");
productos.pop();
console.log(productos);
console.log("-------------------------------------------------");

for (let index = 0; index < productos.length; index ++) {
    console.log(`${productos[index].name} - precio : ${productos[index].precio}
    - stock : ${productos[index].stock}`);
}