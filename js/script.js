let correoInput = document.querySelector('#correo-input');
let contraInput = document.querySelector('#contra-input');

function validarCorreo() {
    let correo = document.querySelector('#correo-input').value.trim();

    if (!validaCorreo(correo)) {
        cambiarTextoModal('El formato del correo no es válido.', false, correoInput);
        return false;
    } else {
        cambiarTextoModal('El formato del correo es válido.', true, correoInput);
        return true;
    }
}

function validarContra() {
    let contra = document.querySelector('#contra-input').value.trim();

    if (!validarPassword(contra)) {
        cambiarTextoModal('El formato de contraseña no es válido.', false, contraInput);
        return false;
    } else {
        cambiarTextoModal('El formato del correo es válido.', true, contraInput);
        return true;
    }
}

function validarLogin() {
    validarCorreo();
    validarContra();

    let correoValido = validarCorreo();
    let contraValido = validarContra();

    if (correoValido && contraValido) {
        window.location.href = "index.html";
    }
}

function cambiarTextoModal(texto, valido, elemento) {
    if(valido) {
        elemento.dataset.texto = texto;  
        elemento.dataset.tipo = 'input-tooltip-valido';  
    } else {
        elemento.dataset.texto = texto;  
        elemento.dataset.tipo = 'input-tooltip-invalido';  
    }
}