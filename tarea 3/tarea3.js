function calcularSegundosYMinutosExcedientes(Segundos_o_minutos, Minutos_o_horas) {
    if (Segundos_o_minutos > 60) {
        for (i = Segundos_o_minutos; i > 60; i = i - 60) {
            Minutos_o_horas += 1
            Segundos_o_minutos = (Segundos_o_minutos - 60)
        }
    }
    return Minutos_o_horas
}

function calcularSegundosYMinutosRestantes(Segundos_o_minutos) {
    if (Segundos_o_minutos > 60) {
        for (i = Segundos_o_minutos; i > 60; i = i - 60)
            Segundos_o_minutos -= 60
    }
    return Segundos_o_minutos
}

function devolverUnidadDeTiempoTotal(unidadDeTiempo) {
    let sumador = 0
    for (i = 0; i < unidadDeTiempo.length; ++i) {
        sumador = sumador + Number(unidadDeTiempo[i].value);
    }
    return sumador
}


botonIngresar = document.querySelector('#ingresar')

let segundos = document.querySelectorAll(".segundos")
let minutos = document.querySelectorAll(".minutos")
let horas = document.querySelectorAll(".horas")



botonIngresar.onclick = function () {
    segundosTotales = devolverUnidadDeTiempoTotal(segundos)
    minutosTotales = devolverUnidadDeTiempoTotal(minutos)
    horasTotales = devolverUnidadDeTiempoTotal(horas)
    minutosConSegundosAgregados = calcularSegundosYMinutosExcedientes(segundosTotales, minutosTotales)
    horasConMinutosAgregados = calcularSegundosYMinutosExcedientes(minutosConSegundosAgregados, horasTotales)
    if (segundosTotales === 0 && minutosTotales === 0 && horasTotales === 0) {
        document.querySelector('#resultado').innerText = "No ingresaste nada!!"
    }
    else {
        document.querySelector('#resultado').innerText = `El tiempo total de todos los videos es: ${horasConMinutosAgregados} horas, ${calcularSegundosYMinutosRestantes(minutosConSegundosAgregados)} minutos y ${calcularSegundosYMinutosRestantes(segundosTotales)} segundos.`
    }
}
