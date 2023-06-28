//Condicional

//var edad =13;
//if(edad > 18) {
  //  Return 'soy mayor de edad';
//}else{
  //  Return 'soy menor de edad';
//}
function dominioDelPais(dominio){
    if(dominio==="co"){
        return 'el pasi es colombia'
    } else if(dominio==="br"){
        return "el pais es brasil"
    } else {
        return "el pais argentina"
    }

    }

    console.log(dominioDelPais('ar'));