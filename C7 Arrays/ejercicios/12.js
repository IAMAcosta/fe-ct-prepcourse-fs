function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var aMayuscula = array.map(function(str) {
    return str.toUpperCase();
  });

  return aMayuscula;
}

var a=["Hola","soy","Agus"];

console.log(convertirStringAMayusculas(a));

module.exports = convertirStringAMayusculas;
