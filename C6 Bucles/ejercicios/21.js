function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  var contador=1;

  
if(numero%2!=0){
  return false;
}else{

  while(numero>=contador){

    if(numero!=contador){
      contador*=2;
    }else{
      return true;
    }

  }

  return false;

}

}

module.exports = esPotenciaDeDos;
