function mesesDelAño(array) {
  // Verificar si los meses están presentes en el arreglo
  if(array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre')) {
    
    var meses = [];
  
    // Buscar los meses y agregarlos al arreglo
    meses.unshift(array[array.indexOf('Enero')]);
 
    meses.unshift(array[array.indexOf('Noviembre')]);
    meses.unshift(array[array.indexOf('Marzo')]);
    return meses;

  } else {
    return "No se encontraron los meses pedidos";
  }
}

console.log(mesesDelAño(['Marzo', 'Diciembre', 'Julio', 'Noviembre', 'Enero']));

module.exports = mesesDelAño;
