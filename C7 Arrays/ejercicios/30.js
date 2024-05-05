function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

let i=0;
var band=true;

while(i<numeros.length){
  j=i+1;

  while(j<numeros.length){
 
    if(numeros[j]==numeros[i]){
    
    return numeros[i];

    }


    j++;
  }

  i++;
}
 
}

console.log(encontrarElementoRepetido([1, 2, 3, 3, 4, 5]));
module.exports = encontrarElementoRepetido;