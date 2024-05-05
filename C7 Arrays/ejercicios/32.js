function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var Letras = string.split('');

  Letras.reverse();
 var reversa;
  reversa=Letras.join('');

  if(string === reversa){
    return true;
  }else{
    return false;
  }
}

console.log(esPalindromo("tucuman"));

module.exports = esPalindromo;