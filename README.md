# Sistema Escolar - Panel de Utilería

Este proyecto es una interfaz de panel escolar (dashboard) interactiva y responsiva que incluye un menú lateral dinámico, visualización de datos en tiempo real persistidos de forma local, validaciones avanzadas de formularios y alertas interactivas.

---

## Estructura del Proyecto

* **`index.html`**: Pantalla principal del sistema. Contiene el navbar superior, el sidebar colapsable, las vistas de captura y consulta, y el modal de mayoría de edad.
* **`css/index.css`**: Hoja de estilos que implementa un diseño limpio, moderno e interactivo (sombras suaves, transiciones fluidas, variables personalizadas de color y tipografía).
* **`js/index.js`**: Controlador principal de la interfaz de usuario. Maneja la visualización de secciones, la simulación de sesión de usuario, el renderizado dinámico de tablas y la validación en tiempo de envío.
* **`js/utileria.js`**: Biblioteca interna con funciones de validación comunes y utilidades (formato de correo, verificación de contraseñas seguras, validación de caracteres, cálculo de edad, etc.).

---

## Funcionalidades Implementadas

### 1. Menú Lateral (Sidebar) e Interactividad
* **Colapsado fluido**: El sidebar cuenta con un botón hamburguesa (`#menu`) que contrae o despliega el menú lateral con transiciones suaves en CSS.
* **Submenú Desplegable**: Al hacer clic en "Usuarios" se despliega verticalmente la opción "Captura" animada mediante `max-height`.
* **Navegación Dinámica**: Las secciones se muestran u ocultan dinámicamente llamando a la función `mostrarSeccion(seccion)` para una experiencia tipo Single Page Application (SPA).

### 2. Gestión de Sesión de Usuario
* **Simulación de Inicio de Sesión**: Los datos ingresados en `login.html` se registran en `localStorage` (`sessionUser`).
* **Visualización del Perfil**: El navbar superior muestra el nombre o correo del usuario activo. Al hacer clic, se despliega un menú flotante con la opción de **"Salir del sistema"** para limpiar la sesión y regresar a la pantalla de acceso.
* **Acceso Directo Permitido**: Para agilizar el desarrollo, no se bloquea el acceso si no hay sesión activa; en su lugar, se asigna automáticamente `"Usuario Demo"` como valor por defecto.

### 3. Registro y Lista de Usuarios
* **Validación Rigurosa**: El formulario de captura de usuario valida que el formato de correo sea correcto (`validarCorreo`) y la contraseña cumpla con criterios mínimos de seguridad (`validarPassword`: 8+ caracteres, mayúscula, minúscula, número y carácter especial).
* **Persistencia Local (`localStorage`)**: Los usuarios registrados se guardan en el arreglo local persistido bajo la clave `usuariosCapturados`.
* **Renderizado en Tiempo Real**: La sección de visualización ("Usuarios") lee y dibuja dinámicamente los registros almacenados en una tabla estilizada.
* **Notificaciones de SweetAlert2**: Los avisos de confirmación de guardado exitoso usan la librería **SweetAlert2** con estilos que armonizan con la paleta de colores del sistema.

### 4. Captura de Alumnos y Cálculo de Edad
* **Validaciones**:
  * **Nombre**: Validado mediante la función `soloLetras` (acepta letras y espacios).
  * **Número de Control**: Debe contener únicamente números y tener una longitud mínima de 6 dígitos (válido para formatos reales de 8 dígitos).
* **Modal de Mayoría de Edad**: Al procesar la fecha de nacimiento ingresada:
  1. Calcula los años cumplidos mediante `calcularEdad()`.
  2. Evalúa si el alumno es mayor de edad a través de `esMayorDeEdad()`.
  3. Despliega de forma animada un modal translúcido (`.fondo-modal`) con los resultados.

---

## Requisitos e Instalación

1. **Uso Local**: Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno.
2. **Servidor Web Local (Recomendado)**: Puedes colocar la carpeta del proyecto dentro del directorio raíz de un servidor local (por ejemplo en `C:/xampp/htdocs/index/`) y acceder mediante:
   ```
   http://localhost/index/index.html
   ```

---

## 👥 Colaboración y Notas de Código
* Las funciones genéricas de validación se encuentran centralizadas en [utileria.js](file:///c:/xampp/htdocs/index/js/utileria.js).
* Toda la lógica de eventos y renderizado interactivo está en [index.js](file:///c:/xampp/htdocs/index/js/index.js).
* Los comentarios en español marcados con `COMENTARIO:` señalan los bloques del listado de usuarios dinámicos tanto en el HTML como en el JS.
