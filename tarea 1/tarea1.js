var botonCalcular = document.querySelector('#calcular')

botonCalcular.onclick = function(){
let salarioAnual = document.querySelector('#salario-anual').value
  document.querySelector('#salario-mensual').value = (salarioAnual / 12)
}
