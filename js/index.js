const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

// Nuevas constantes para el submenú
const btnUsuarios = document.getElementById("btn-usuarios");
const submenuUsuarios = document.getElementById("submenu-usuarios");

// Control del menú lateral principal
menu.addEventListener("click", () => {
  sidebar.classList.toggle("menu-toggle");
  menu.classList.toggle("menu-toggle");

  if (!sidebar.classList.contains("menu-toggle")) {
    submenuUsuarios.classList.remove("open");
    btnUsuarios.classList.remove("open");
  }
});

// Control del despliegue del submenú "Usuarios"
btnUsuarios.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que la página salte al inicio por el href="#"
  submenuUsuarios.classList.toggle("open");
  btnUsuarios.classList.toggle("open");
  if (!sidebar.classList.contains("menu-toggle")) {
    submenuUsuarios.classList.remove("open");
    btnUsuarios.classList.remove("open");
  };
});

//Submenú de captura
const arrowUsuarios = document.getElementById("captura-menu");
const btnCaptura = document.getElementById("btn-captura");
const seccionUsuarios = document.getElementById("section-usuarios");
const seccionCaptura = document.getElementById("section-captura");
const formUsuario = document.getElementById("form-usuario");

function mostrarSeccion(seccion) {
  document.querySelectorAll(".content-section").forEach(s => s.classList.add("hidden"));
  seccion.classList.remove("hidden");
}

function cerrarSubmenuUsuarios() {
  submenuUsuarios.classList.remove("open");
  btnUsuarios.classList.remove("open");
}

btnUsuarios.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarSeccion(seccionUsuarios);
});

arrowUsuarios.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!sidebar.classList.contains("menu-toggle")) return;
  submenuUsuarios.classList.toggle("open");
  btnUsuarios.classList.toggle("open");
});

btnCaptura.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarSeccion(seccionCaptura);
});


function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

// ---------- Nuevas Funciones Agregadas (Sin alterar las existentes) ----------

// Manejo de Sesión de Usuario (Simulado)
const sessionUser = localStorage.getItem('sessionUser') || 'Usuario Demo';
document.getElementById('user-name-display').textContent = sessionUser;

const userProfile = document.getElementById('user-profile');
const dropdownMenu = document.getElementById('dropdown-menu');

userProfile.addEventListener('click', (e) => {
  e.stopPropagation();
  userProfile.classList.toggle('active');
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', () => {
  userProfile.classList.remove('active');
  dropdownMenu.classList.remove('show');
});

const btnLogout = document.getElementById('btn-logout');
btnLogout.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('sessionUser');
  window.location.href = 'login.html';
});

// COMENTARIO: Lógica de la Lista de Usuarios Capturados (Relacionado con la sección #section-usuarios de index.html)
let usuariosCapturados = JSON.parse(localStorage.getItem('usuariosCapturados')) || [];

function guardarUsuariosStorage() {
  localStorage.setItem('usuariosCapturados', JSON.stringify(usuariosCapturados));
}

const listaUsuariosBody = document.getElementById("lista-usuarios-body");

// COMENTARIO: Función para dibujar las filas de la tabla de usuarios dinámicamente
function renderizarUsuarios() {
  if (!listaUsuariosBody) return;
  listaUsuariosBody.innerHTML = "";
  usuariosCapturados.forEach(u => {
    const row = document.createElement("tr");
    row.style.borderBottom = "1px solid var(--border-color)";
    
    const cellNombre = document.createElement("td");
    cellNombre.style.padding = "0.75rem 0.5rem";
    cellNombre.style.fontSize = "0.95rem";
    cellNombre.style.color = "var(--text-color)";
    cellNombre.textContent = u.nombre;
    
    const cellCorreo = document.createElement("td");
    cellCorreo.style.padding = "0.75rem 0.5rem";
    cellCorreo.style.fontSize = "0.95rem";
    cellCorreo.style.color = "var(--text-color)";
    cellCorreo.textContent = u.correo;
    
    row.appendChild(cellNombre);
    row.appendChild(cellCorreo);
    listaUsuariosBody.appendChild(row);
  });
}

// COMENTARIO: Carga inicial de los usuarios en la tabla
renderizarUsuarios();

// Validación del Formulario de Usuario
formUsuario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreInput = document.getElementById('usr-nombre');
  const correoInput = document.getElementById('usr-correo');
  const passwordInput = document.getElementById('usr-password');
  const errorCorreo = document.getElementById('error-correo');
  const errorPassword = document.getElementById('error-password');

  let isValid = true;

  // Validar Correo
  if (!validarCorreo(correoInput.value.trim())) {
    errorCorreo.style.display = 'block';
    isValid = false;
  } else {
    errorCorreo.style.display = 'none';
  }

  // Validar Password
  if (!validarPassword(passwordInput.value)) {
    errorPassword.style.display = 'block';
    isValid = false;
  } else {
    errorPassword.style.display = 'none';
  }

  if (isValid) {
    // COMENTARIO: Guardamos el nuevo usuario en el array, persistimos en LocalStorage y redibujamos la tabla de la sección Usuarios
    usuariosCapturados.push({
      nombre: nombreInput.value.trim(),
      correo: correoInput.value.trim(),
      password: passwordInput.value
    });
    guardarUsuariosStorage();
    renderizarUsuarios();

    // Uso de SweetAlert2
    Swal.fire({
      title: '¡Guardado!',
      text: 'Usuario guardado correctamente.',
      icon: 'success',
      confirmButtonColor: 'var(--teal)'
    });
    formUsuario.reset();
  }
});

// Validación del Formulario de Alumnos
const formAlumno = document.getElementById('form-alumno');
formAlumno.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreInput = document.getElementById('al-nombre');
  const nocontrolInput = document.getElementById('al-nocontrol');
  const fnacimientoInput = document.getElementById('al-fnacimiento');

  const errorNombre = document.getElementById('error-al-nombre');
  const errorNoControl = document.getElementById('error-al-nocontrol');
  const errorFnacimiento = document.getElementById('error-al-fnacimiento');

  let isValid = true;

  // Validar Nombre (solo letras y espacios)
  if (!soloLetras(nombreInput.value.trim())) {
    errorNombre.style.display = 'block';
    isValid = false;
  } else {
    errorNombre.style.display = 'none';
  }

  // Validar Número de Control: debe tener al menos 6 dígitos numéricos
  const nocontrolVal = nocontrolInput.value.trim();
  const isOnlyDigits = /^\d+$/.test(nocontrolVal);
  const hasCorrectLength = nocontrolVal.length >= 6;
  if (!isOnlyDigits || !hasCorrectLength) {
    errorNoControl.style.display = 'block';
    isValid = false;
  } else {
    errorNoControl.style.display = 'none';
  }

  // Validar Fecha de Nacimiento
  if (!fnacimientoInput.value) {
    errorFnacimiento.style.display = 'block';
    isValid = false;
  } else {
    errorFnacimiento.style.display = 'none';
  }

  if (isValid) {
    const fnacimiento = fnacimientoInput.value;
    const edad = calcularEdad(fnacimiento);
    const esMayor = esMayorDeEdad(fnacimiento);

    // Actualizar contenido del modal
    document.getElementById('edadTexto').textContent = edad + " años";
    document.getElementById('estadoTexto').textContent = esMayor ? "El alumno es mayor de edad." : "El alumno es menor de edad.";
    
    // Mostrar modal
    document.getElementById('modal').style.display = 'flex';

    // Limpiar formulario
    formAlumno.reset();
  }
});

// Manejo del botón de la sección de Alumnos en el Sidebar
const btnAlumnos = document.getElementById("btn-alumnos");
const seccionAlumnos = document.getElementById("section-alumnos");

btnAlumnos.addEventListener("click", (e) => {
  e.preventDefault();
  mostrarSeccion(seccionAlumnos);
});