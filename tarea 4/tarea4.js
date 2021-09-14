
num1 = Number(document.querySelector('#num1').innerText)
num2 = Number(document.querySelector('#num2').innerText)
num3 = Number(document.querySelector('#num3').innerText)
num4 = Number(document.querySelector('#num4').innerText)
num5 = Number(document.querySelector('#num5').innerText)
num6 = Number(document.querySelector('#num6').innerText)
num7 = Number(document.querySelector('#num7').innerText)
num8 = Number(document.querySelector('#num8').innerText)
num9 = Number(document.querySelector('#num9').innerText)
num10 = Number(document.querySelector('#num10').innerText)


let lista = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10]

function numeroMenor() {
    var x = lista[0]
    for (i = 0; i < lista.length; i++) { //el codigo va a chequear todos los numeros de la lista
        if (lista[i] < x) {
            x = lista[i] // empezando desde el indice 0, x va a ser el menor numero
        }
    }

    return document.querySelector('#em1').innerText = `El numero menor de la lista es ${x}`
}
function numeroMayor() {
    var x = lista[0]
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > x) { // exactamente lo mismo que la funcion numeroMenor. la diferencia es que esta vez x sera el mayor numero
            x = lista[i]
        }
    }

    return document.querySelector('#em2').innerText = `El numero mayor de la lista es ${x}`
}

function numeroPromedio() {
    var x = 0
    for (i = 0; i < lista.length; i++) {
        var x = x + lista[i]
    } //el codigo suma todos los numeros de la lista y los guarda en x, x dividido la cantidad de numeros de la lista es el promedio de las mismas.
    return document.querySelector('#em3').innerText = (`El promedio de todos los numeros es ${x / lista.length}`)
}

function buscarNumerosRepetidos() {
    let a = 0
    let z = 0
    let r = 0
    let w = []
    let ww = []
    let vv = ""
    var s;
    while (z < (lista.length)) { // es un loop que va desde el principio al final de la lista

        j = 0 // j cuenta todas las veces que se repite el numero, cada vez que hace una comparacion de todos los numeros con el numero que se encuentra en el indice z, j vuelve a ser 0, para ver cuantas veces se repite el siguiente numero.

        for (i = 0; i < lista.length; i++) {  // es un segundo loop que sirve para comparar todos los numeros de la lista con el numero actual del primer loop.
            if (lista[z] === lista[i]) {
                j = j + 1 // un numero se repite
                if (j > 1) { // solamente funciona si el numero se repite mas de si mismo(el indice i siempre va a ser el indice z una vez)
                    if (j >= r) { // tiene que ser MAYOR O IGUAL a r para que el codigo subyacente se ejecute

                        if (j === r) { // si j llega a ser igual a r el numero actual se va a agregar a la lista, leer mas abajo
                            w.push(lista[z])
                            if (lista[z] === 0) {
                                s = 1 // si el numero que se esta repitiendo es 0, s va a ser 1 (es como usar true) pero siento que es menos complicado usar estos numeros que true/false
                            }

                        } else if (j > r) {
                            r = j  // r es la variable que guarda cuantas veces un numero se repite, r siempre va a ser la mayor cantidad de veces.
                            w = [] // la lista "w" solamente va a tomar todos los numeros que se repiten la mayor cantidad de veces
                            w.push(lista[z])
                            if (lista[z] != 0) { //si el numero que se esta repitiendo es 0, s va a seguir siendo 1, si no, 2 (como false) 
                                s = 2
                            }

                        }
                    }
                }
            }

        }


        z = z + 1 // ya todos los numeros se compararon con el primer numero, vamos a pasar al siguiente

    }

    while (a < (w.length)) { //la lista tiene un error y es que una vez que en el for loop pasa esto: (j = r), j va a ser siempre === r. entonces, cada vez que el primer if sea verdadero. ese numero actual de la lista se va a agregar a la lista w por mas que ya exista, y yo necesito ese numero una sola vez. por eso voy a usar este codigo que compara los numeros de la nueva lista:
        for (i = 0; i <= w.length - 1; i++) {
            if ((w[a] === w[i]) && (a != i)) { //solamente selecciona los numeros que son iguales, y ademas tienen que estar en diferente posicion de indice, para evitar que el numero de la lista se reste asi mismo
                w[i] = (w[i] - w[a]) // todos los numeros iguales al que esta en el indice [a] van a ser 0
            }
        }
        a = a + 1
    }



    for (i = 0; i < w.length; i++) { //la nueva lista sera "ww" y contiene los numeros que no son 0.
        if (w[i] != 0) {
            ww.push(w[i])
        }
    }
    if (s === 1) { //al final de todo, si en la lista original el numero 0 se repitio la mayor cantidad de veces, voy a agregarlo en la lista
        ww.push(0)
    }
    for (i = 0; i < ww.length; i++) {  //la variable vv se queda con los numeros restantes de la lista ww

        vv = vv + `${String(ww[i])}, ` // estos numeros ahora son strings separados en comas
    }



    if (ww.length === 1) {
        if (r === 2) {
            document.querySelector('#em4').innerText = (`El numero que mas se repite es ${String(ww[0])} y se repite una vez.`)
        }
        else if (r > 2) {
            document.querySelector('#em4').innerText = (`El numero que mas se repite es ${String(ww[0])} y se repite ${r} veces.`)
        }
    }
    else if (ww.length === 2) {

        if (r === 2) {
            document.querySelector('#em4').innerText = (`Los numeros que mas se repiten son ${String(ww[0])} y ${String(ww[1])}. y se repiten una vez.`)
        }
        else if (r > 2) {

            document.querySelector('#em4').innerText = (`Los numeros que mas se repiten son ${String(ww[0])} y ${String(ww[1])}. y se repiten ${r} veces.`)
        }
    }
    else if (ww.length > 2) {

        if (r === 2) {
            document.querySelector('#em4').innerText = (`Los numeros que mas se repiten son ${vv} y se repiten una vez.`)
        } else if (r > 2) {

            document.querySelector('#em4').innerText = (`Los numeros que mas se repiten son ${String(vv)}y se repiten ${r} veces.`)
        }
    }
    else {
        return document.querySelector('#em4').innerText = ('No se repite ningun numero.')
    }


}


numeroMayor()
numeroMenor()
numeroPromedio()
buscarNumerosRepetidos()