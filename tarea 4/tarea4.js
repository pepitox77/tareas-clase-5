let listaNumerosEnHTML = document.querySelectorAll('.numero')

let listaNumerosEnJAVA = []
for (i = 0; i < listaNumerosEnHTML.length; i++) {
    listaNumerosEnJAVA.push(Number(listaNumerosEnHTML[i].innerText))
}


function obtenerNumeroMenor(lista) {
    let numeroMenor = lista[0]
    for (i = 0; i < lista.length; i++) {
        if (lista[i] < numeroMenor) {
            numeroMenor = lista[i]
        }
    }

    return numeroMenor
}
function obtenerNumeroMayor(lista) {
    let numeroMayor = lista[0]
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > numeroMayor) {
            numeroMayor = lista[i]
        }
    }

    return numeroMayor
}
function calcularNumeroPromedio(lista) {
    let numeroPromedio = 0
    for (i = 0; i < lista.length; i++) {
         numeroPromedio = numeroPromedio + lista[i]
    }
    return numeroPromedio
}

function buscarYEscribirNumerosRepetidos(lista) {
    let mayorCantidadDeRepeticiones = 0
    let listaConNumerosRepetidos = []
    let listaConNumerosRepetidosLimpia = []
    let numerosRepetidosAfueraDeLaLista = ""
    var CeroSeRepite;
    for (primerLoop = 0; primerLoop < (lista.length); primerLoop++) { // es un loop que va desde el principio al final de la lista

        NumeroSeRepite = 0

        for (segundoLoop = 0; segundoLoop < lista.length; segundoLoop++) {  // es un segundo loop que sirve para comparar todos los numeros de la lista con el numero actual del primer loop.
            if (lista[primerLoop] === lista[segundoLoop]) {
                NumeroSeRepite = NumeroSeRepite + 1 // un numero se repite
                if (NumeroSeRepite > 1) { // solamente funciona si el numero se repite mas de si mismo(el indice primerLoop siempre va a ser el indice segundoLoop una vez)
                    if (NumeroSeRepite >= mayorCantidadDeRepeticiones) { // tiene que ser MAYOR O IGUAL a(mayorCantidadDeRepeticiones para que el codigo subyacente se ejecute

                        if (NumeroSeRepite === mayorCantidadDeRepeticiones) { // si NumeroSeRepite llega a ser igual a(mayorCantidadDeRepeticiones el numero actual se va a agregar a la lista, leer mas abajo
                            listaConNumerosRepetidos.push(lista[primerLoop])
                            if (lista[primerLoop] === 0) {
                                CeroSeRepite = 1 // si el numero que se esta repitiendo es 0, s va a ser 1 (es como usar true) pero siento que es menos complicado usar estos numeros que true/false
                            }

                        } else if (NumeroSeRepite > mayorCantidadDeRepeticiones) {
                            mayorCantidadDeRepeticiones = NumeroSeRepite  //(mayorCantidadDeRepeticiones es la variable que guarda cuantas veces un numero se repite,(mayorCantidadDeRepeticiones siempre va a ser la mayor cantidad de veces.
                            listaConNumerosRepetidos = [] // la lista "listaConNumerosRepetidos" solamente va a tomar todos los numeros que se repiten la mayor cantidad de veces
                            listaConNumerosRepetidos.push(lista[primerLoop])
                            if (lista[primerLoop] != 0) { //si el numero que se esta repitiendo es 0, CeroSeRepite va a seguir siendo 1, si no, 2 (como false) 
                                CeroSeRepite = 2
                            }

                        }
                    }
                }
            }

        }

    }

    for (primerLoop = 0; primerLoop < (listaConNumerosRepetidos.length); primerLoop++) { //la lista tiene un error y es que una vez que en el for loop pasa esto: (NumeroSeRepite = (mayorCantidadDeRepeticiones), NumeroSeRepite va a ser siempre ===(mayorCantidadDeRepeticiones. entonces, cada vez que el primer if sea verdadero. ese numero actual de la lista se va a agregar a la lista listaConNumerosRepetidos por mas que ya exista, y yo necesito ese numero una sola vez. por eso voy a usar este codigo que compara los numeros de la nueva lista:
        for (segundoLoop = 0; segundoLoop < listaConNumerosRepetidos.length; segundoLoop++) {
            if ((listaConNumerosRepetidos[primerLoop] === listaConNumerosRepetidos[segundoLoop]) && (primerLoop != segundoLoop)) { //solamente selecciona los numeros que son iguales, y ademas tienen que estar en diferente posicion de indice, para evitar que el numero de la lista se reste asi mismo
                listaConNumerosRepetidos[segundoLoop] = (listaConNumerosRepetidos[segundoLoop] - listaConNumerosRepetidos[primerLoop]) // todos los numeros iguales al que esta en el indice [segundoLoop] van a ser 0
            }
        }

    }



    for (i = 0; i < listaConNumerosRepetidos.length; i++) { //la nueva lista sera (listaConNumerosRepetidosLimpia" y contiene los numeros que no son 0.
        if (listaConNumerosRepetidos[i] != 0) {
            listaConNumerosRepetidosLimpia.push(listaConNumerosRepetidos[i])
        }
    }
    if (CeroSeRepite === 1) { //al final de todo, si en la lista original el numero 0 se repitio la mayor cantidad de veces, voy a agregarlo en la lista
        listaConNumerosRepetidosLimpia.push(0)
    }
    for (i = 0; i < listaConNumerosRepetidosLimpia.length; i++) {  //la variable numerosRepetidosAfueraDeLaLista se queda con los numeros restantes de la lista listaConNumerosRepetidosLimpia

        numerosRepetidosAfueraDeLaLista = numerosRepetidosAfueraDeLaLista + `${String(listaConNumerosRepetidosLimpia[i])}, ` // estos numeros ahora son strings separados en comas
    }


    if (listaConNumerosRepetidosLimpia.length === 1) {
        if (mayorCantidadDeRepeticiones === 2) {
            return (`${String(listaConNumerosRepetidosLimpia[0])} y se repite una vez.`)
        }
        else if (mayorCantidadDeRepeticiones > 2) {
            return (`${String(listaConNumerosRepetidosLimpia[0])} y se repite ${mayorCantidadDeRepeticiones} veces.`)
        }
    }
    else if (listaConNumerosRepetidosLimpia.length === 2) {

        if (mayorCantidadDeRepeticiones === 2) {
            return (`${String(listaConNumerosRepetidosLimpia[0])} y ${String(listaConNumerosRepetidosLimpia[1])}. y se repiten una vez.`)
        }
        else if (mayorCantidadDeRepeticiones > 2) {

            return (`${String(listaConNumerosRepetidosLimpia[0])} y ${String(listaConNumerosRepetidosLimpia[1])}. y se repiten ${mayorCantidadDeRepeticiones} veces.`)
        }
    }
    else if (listaConNumerosRepetidosLimpia.length > 2) {

        if (mayorCantidadDeRepeticiones === 2) {
            return (`${String(numerosRepetidosAfueraDeLaLista)}y se repiten ${mayorCantidadDeRepeticiones} veces.`)
        } else if (mayorCantidadDeRepeticiones > 2) {

            return (`${String(numerosRepetidosAfueraDeLaLista)}y se repiten ${mayorCantidadDeRepeticiones} veces.`)
        }
    }
    else {
        return ('No se repite ningun numero.')
    }


}
document.querySelector('#numero-menor').innerText = ` ${obtenerNumeroMenor(listaNumerosEnJAVA)}`
document.querySelector('#numero-mayor').innerText = ` ${obtenerNumeroMayor(listaNumerosEnJAVA)}`
document.querySelector('#numero-promedio').innerText = ` ${calcularNumeroPromedio(listaNumerosEnJAVA)}`
document.querySelector('#numeros-repetidos').innerText = ` ${buscarYEscribirNumerosRepetidos(listaNumerosEnJAVA)}`
