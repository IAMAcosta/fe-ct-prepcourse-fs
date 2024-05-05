function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  var a=[];
  var c=0;
  var cont=2;
  
    for(let i=0; i<10 ; i++){
  
      a.push(num+cont);
      cont+=2;
      c++;
      if(5 === i){
        
        i++;
        continue;
      
      }
  
    }
  
    return a;


}

console.log (continueStatement (50));

module.exports = continueStatement;
