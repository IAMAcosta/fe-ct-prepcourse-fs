function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabladelseis = [];



  for(let i=0;i<=10;i++){

    tabladelseis[i]=6*i;

  }

  return tabladelseis;
}

console.log(tablaDelSeis());

module.exports = tablaDelSeis;
