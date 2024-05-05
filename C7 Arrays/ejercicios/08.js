function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   if( array.includes(num)){
      return array.indexOf(num);
   }else{
      return -1;
   }

}


console.log(encontrarElemento(7,[1,1,6,9,8,7]));

module.exports = encontrarElemento;
