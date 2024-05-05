function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

var arraynuevo = array.map(function(num){

  return num*array.indexOf(num);
})

return arraynuevo;
}

module.exports = multiplicarElementosPorIndice;
