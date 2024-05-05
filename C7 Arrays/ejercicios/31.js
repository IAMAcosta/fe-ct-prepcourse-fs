function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  var Letras = texto.split('');

  Letras.reverse();

  texto=Letras.join('');

  return texto;

}

console.log(invertirTexto("arroz blanco"));

module.exports = invertirTexto;
