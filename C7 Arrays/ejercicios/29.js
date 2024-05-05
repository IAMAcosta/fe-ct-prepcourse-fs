function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
let i=0;

  while(i<numeros.length-1){

    if( numeros[i+1] != numeros[i]+1){

      return numeros[i]+1;

    }

    i++;
  }

  return null;
  
}
console.log(encontrarNumeroFaltante([1, 3, 4, 5, 6, 7, 8, 9]));


module.exports = encontrarNumeroFaltante;