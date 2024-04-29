function esPositivo(num) {
var string;
 if( num > 0){
  string='Es positivo';
 }else if (num < 0){
  string='Es negativo';
 }else{
  return false;
 }

 return string;
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
}

module.exports = esPositivo;