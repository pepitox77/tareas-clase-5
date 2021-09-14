function sumarVideos(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5
    }
    
function sumar(num1, num2) {
        return num1 + num2
        }

function calcularSegundosYMinutos(num1, num2) {
    if (num1 > 60) {
        for (i = num1; i > 60; i = i - 60){ 
            num2 += 1
        num1 = (num1 - 60)
    }}
    return num2 }

function calcularSegundosYMinutosRestantes(num) {
    if (num > 60) {
        for (i = num; i > 60; i = i - 60)
            num -= 60
    }
    return num
}


botonIngresar = document.querySelector('#ingresar')


let calcularVideos = botonIngresar.onclick = function(){ 

segundosTotales = sumarVideos(Number(document.querySelector('#segundos-video0').value),
Number(document.querySelector('#segundos-video1').value),
Number(document.querySelector('#segundos-video2').value),
Number(document.querySelector('#segundos-video3').value),
Number(document.querySelector('#segundos-video4').value))

minutosTotales = sumarVideos(Number(document.querySelector('#minutos-video0').value),
Number(document.querySelector('#minutos-video1').value),
Number(document.querySelector('#minutos-video2').value),
Number(document.querySelector('#minutos-video3').value),
Number(document.querySelector('#minutos-video4').value))

horasTotales = sumarVideos(Number(document.querySelector('#hora-video0').value),
Number(document.querySelector('#hora-video1').value),
Number(document.querySelector('#hora-video2').value),
Number(document.querySelector('#hora-video3').value),
Number(document.querySelector('#hora-video4').value))




let MINUTOS_CON_SEGUNDOS_AGREGADOS = calcularSegundosYMinutos(segundosTotales, minutosTotales)
let SEGUNDOS_RESTANTES = calcularSegundosYMinutosRestantes(segundosTotales)
let MINUTOS_RESTANTES = calcularSegundosYMinutosRestantes(MINUTOS_CON_SEGUNDOS_AGREGADOS)
let HORAS_RESTANTES = calcularSegundosYMinutos(MINUTOS_CON_SEGUNDOS_AGREGADOS, horasTotales)

if (segundosTotales || minutosTotales || horasTotales != ""){ 
document.querySelector("#resultado").innerText = ` La suma total del tiempo de los videos es: ${HORAS_RESTANTES} horas ${MINUTOS_RESTANTES} minutos ${SEGUNDOS_RESTANTES} segundos. `
}}
