var datosUsuario = document.querySelector('#ingresar')

datosUsuario.onclick = function () {
    nombreUsuario = document.querySelector('#nombre-usuario').value
    segundoNombreUsuario = document.querySelector('#segundonombre-usuario').value
    edadUsuario = document.querySelector('#edad-usuario').value
    apellidoUsuario = document.querySelector('#apellido-usuario').value

    if (nombreUsuario != "") {
        document.querySelector('#primer-nombre').innerText = `Tu nombre es: ${nombreUsuario}`
        document.querySelector('#segundo-nombre').innerText = `Tu segundo nombre es: ${segundoNombreUsuario}`
        document.querySelector('#apellido').innerText = `Tu apellido es: ${apellidoUsuario}`
        document.querySelector('#edad').innerText = `Tu edad es: ${edadUsuario}`
        document.querySelector('#titulo').innerText = `Bienvenido, ${nombreUsuario}!`
    } return false
}
