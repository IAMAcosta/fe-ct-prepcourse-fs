function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var arregloNuevo = [];

  for(let i=0;i<array.length;i++){

    if(array[i]%2==0){
      arregloNuevo.push(array[i]);
    }

  }

return arregloNuevo;

}

module.exports = filtrarNumerosPares;
