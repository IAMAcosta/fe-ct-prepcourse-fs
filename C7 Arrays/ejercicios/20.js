function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var band=true;
  var i=0;
 var a=array[0];

  while(band===true && i<array.length){

    if(array[i]===a){
      i++;
    }else{
      band = false;
    }

  }

  return band;
}

let b=[1,2,3,4,5];

console.log(todosIguales(b));

module.exports = todosIguales;
