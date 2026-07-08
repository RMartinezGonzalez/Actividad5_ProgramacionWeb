// ---------- FUNCIONES OBLIGATORIAS ----------

function validarCorreo(correo) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

function soloLetras(texto) {
    var letrasPermitidas = 'abcdefghijklmnopqrstuvwxyzáéíóúñü ';

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i].toLowerCase();

        if (letrasPermitidas.indexOf(caracter) === -1) {
            return false;
        }
    }

    return true;
}

function validarLongitud(numero, maxLongitud) {
    var cadena = numero.toString();
    if (cadena.length <= maxLongitud) {
        return true;
    } else {
        return false;
    }
}

function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);

    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mesActual = hoy.getMonth();
    var mesNacimiento = nacimiento.getMonth();
    var diaActual = hoy.getDate();
    var diaNacimiento = nacimiento.getDate();

    if (mesActual < mesNacimiento) {
        edad = edad - 1;
    } else if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
        edad = edad - 1;
    }

    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    var edad = calcularEdad(fechaNacimiento);
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

function validarPassword(password) {
    var tieneMayuscula = false;
    var tieneMinuscula = false;
    var tieneNumero = false;
    var tieneEspecial = false;

    for (var i = 0; i < password.length; i++) {
        var letra = password[i];

        if (letra >= 'A' && letra <= 'Z') {
            tieneMayuscula = true;
        }
        if (letra >= 'a' && letra <= 'z') {
            tieneMinuscula = true;
        }
        if (letra >= '0' && letra <= '9') {
            tieneNumero = true;
        }
        if ('@.#$!%*?&'.indexOf(letra) !== -1) {
            tieneEspecial = true;
        }
    }

    if (password.length >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        return true;
    } else {
        return false;
    }
}


// ---------- FUNCIONES PROPIAS ----------

function validarCURP(curp) {
    var regex = /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d]{1}\d{1}$/i;
    return regex.test(curp);
}

function validarNombreUsuario(usuario) {
    var regex = /^[a-zA-Z][a-zA-Z0-9_]{3,14}$/;
    return regex.test(usuario);
}

function sinPalabrasProhibidas(texto, listaProhibidas) {
    var textoLower = texto.toLowerCase();
    for (var i = 0; i < listaProhibidas.length; i++) {
        if (textoLower.indexOf(listaProhibidas[i].toLowerCase()) !== -1) {
            return false;
        }
    }
    return true;
}

function validarTelefono(telefono) {
    var soloNumeros = /^\d+$/.test(telefono);
    var longitudCorrecta = validarLongitud(telefono, 10) && telefono.toString().length === 10;
    return soloNumeros && longitudCorrecta;
}
