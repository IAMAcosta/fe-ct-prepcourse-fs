function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var inicio,ultimo;

if ( a>b){
  inicio=b;
  ultimo=a;
}else{
  inicio=a;
  ultimo=b;
}

var producto=1;

for( var i=inicio;i<=ultimo;i++){

  producto=producto*i;
}

if(producto==-0){
  producto=0;
}

return producto;
}

console.log(productoEntreNúmeros(-5, 5));

module.exports = productoEntreNúmeros;