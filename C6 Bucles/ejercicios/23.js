function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

var raiz;
var div=1;
var bool=false;

raiz=Math.floor(Math.sqrt(numero));
 
while (raiz>0){

  if(numero%raiz==0){
    div++;
  }

  raiz--;
}

if(div==2 || numero == 1){
  return true;
}else{
  return false;
}

}

module.exports = esNumeroPrimo;
