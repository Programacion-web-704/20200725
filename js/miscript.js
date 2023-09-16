//Comentario de una linea

/*
Comentario de varias lineas
*/

/* Caso 1: Obtener la cabecera del documento */
let cabecera = document.head;
console.log( cabecera )

/* Caso 2: Obtener la body del documento */
let cuerpo = document.body;
console.log( cuerpo )

/* Caso 3: Recuperar un nodo y ver sus propiedades */
let lpAntiguos = document.getElementById("antiguo")
console.log( lpAntiguos )

let arr_antiguos = []
let nodos = lpAntiguos.childNodes
for (i=0; i < nodos.length; i++){
    console.log( nodos[i] )

    if( nodos[i].nodeType == document.ELEMENT_NODE ){
        arr_antiguos.push( nodos[i].textContent )
    }
}

document.getElementById("rpta1").innerHTML = arr_antiguos

// Caso 4: Recuperar un nodo y ver sus propiedades
let lpModernos = document.getElementById("moderno")
console.log( lpModernos )

let arr_modernos = []
nodos = lpModernos.childNodes
for (i=0; i < nodos.length; i++){
    console.log( nodos[i] )

    if( nodos[i].nodeType == document.ELEMENT_NODE ){
        arr_modernos.push( nodos[i].textContent )
    }
}

document.getElementById("rpta2").innerHTML = arr_modernos

// Caso 5: Concatenar arreglos
document.getElementById("rpta3").innerHTML = arr_antiguos.concat(arr_modernos)

// Caso 6: Concatenar los elementos del arreglo para que sea un String
document.getElementById("rpta3").innerHTML = arr_antiguos.join("*")

// Caso 7: Ubicar la posicion de un elemento en un arreglo
let pos = arr_modernos.indexOf('Kotlin')
document.getElementById("rpta3").innerHTML = pos

// Caso 8: Insertar un elemento
arr_modernos.splice(1 , 0 , 'Unlamda' , 'Malbolge')
document.getElementById("rpta3").innerHTML = arr_modernos

// Caso 9: Insertar y borrar un elemento
arr_modernos.splice(3 , 1 , 'Intercal' , 'ooAk!')
document.getElementById("rpta4").innerHTML = arr_modernos

// Caso 10: Borrar un elemento
arr_modernos.splice(3 , 1 )
document.getElementById("rpta5").innerHTML = arr_modernos

//Caso 11: Obtener ultimo elemento del arreglo
var elemento = arr_modernos.pop()
document.getElementById("rpta1").innerHTML = elemento

//Caso 12: Obtener primer elemento del arreglo
var elemento = arr_modernos.shift()
document.getElementById("rpta1").innerHTML = elemento

//Caso 13: Colocar elemento al final del arreglo
arr_modernos.push("Dart")
document.getElementById("rpta1").innerHTML = arr_modernos

//Caso 14: Otra forma de colocar elemento al final del arreglo
arr_modernos[arr_modernos.length] = 'Opa'
document.getElementById("rpta1").innerHTML = arr_modernos

//Caso 15: Colocar elemento al inicio del arreglo
arr_modernos.unshift("SQL")
document.getElementById("rpta1").innerHTML = arr_modernos

//Caso 16: Ordenar el arreglo
arr_modernos.sort()
document.getElementById("rpta1").innerHTML = arr_modernos

//Caso 17: Ordenar al revez el arreglo
arr_modernos.reverse()
document.getElementById("rpta1").innerHTML = arr_modernos

//Caso 18: Generar HTML
var rpta =[]
rpta.push("<ol>")
rpta.push("<li> Peru - 0 </li>")
rpta.push("<li> Brazil - 3 </li>")
rpta.push("<li> Chile - 1 </li>")
rpta.push("</ol>")
var contenido=rpta.join(' ')

document.getElementById("rpta1").innerHTML = contenido
