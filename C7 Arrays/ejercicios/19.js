function multiplicarArgumentos() {
  // Verificar si no se pasaron argumentos
  if (arguments.length === 0) {
    return 0;
  }
  
  // Si se pasa solo un argumento, retornarlo
  if (arguments.length === 1) {
    return arguments[0];
  }
  
  // Inicializar el producto como 1 en lugar de "a"
  var producto = 1;
  
  // Iterar sobre todos los argumentos y multiplicarlos
  for (var i = 0; i < arguments.length; i++) {
    // Multiplicar en lugar de sumar
    producto *= arguments[i];
  }
  
  // Retornar el producto
  return producto;
}


module.exports = multiplicarArgumentos;
