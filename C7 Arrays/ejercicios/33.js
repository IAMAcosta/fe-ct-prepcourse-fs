function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  
  var combinada="";
  var mayorLong ;
  var pal1=str1.split('');
  var pal2=str2.split('');
  var pal3=str3.split('');
 

  if(pal1.length>=pal2.length && pal1.length>=pal3.length){
    mayorLong=pal1.length;
  }else if(pal2.length>=pal1.length && pal2.length>=pal3.length){
    mayorLong=pal2.length;
  }else{
    mayorLong=pal3.length;
  }

  for(let i=0;i<mayorLong;i++){


    if(i<pal1.length){
    combinada+=pal1[i];
    }
    if(i<pal2.length){
      combinada+=pal2[i];
    }
    if(i<pal3.length){
      combinada+=pal3[i];
    }
  }

return combinada;

}


console.log(combine("abc", "12345", "67"));
module.exports = combine;