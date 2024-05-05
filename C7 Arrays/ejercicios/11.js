function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

var arrayTrabajado = array.map( function(num) {

  return num*=2;

});

return arrayTrabajado;
}

module.exports = duplicarElementos;
