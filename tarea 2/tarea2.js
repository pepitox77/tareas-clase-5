var datosUsuario = document.querySelector('#ingresar')

datosUsuario.onclick = function () {
    nombreUsuario = document.querySelector('#nombre-usuario').value
    segundoNombreUsuario = document.querySelector('#segundonombre-usuario').value
    edadUsuario = document.querySelector('#edad-usuario').value
    apellidoUsuario = document.querySelector('#apellido-usuario').value

    if (nombreUsuario != "") {
        document.querySelector('#resultado0').innerText = `Tu nombre es: ${nombreUsuario}`
        document.querySelector('#resultado1').innerText = `Tu segundo nombre es: ${segundoNombreUsuario}`
        document.querySelector('#resultado2').innerText = `Tu apellido es: ${apellidoUsuario}`
        document.querySelector('#resultado3').innerText = `Tu edad es: ${edadUsuario}`
        document.querySelector('#titulo').innerText = `Bienvenido, ${nombreUsuario}!`
    } return false
}
