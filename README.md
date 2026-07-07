# Tooltips reutilizables


## Portada

<div align="center">

# INSTITUTO TECNOLÓGICO NACIONAL DE MÉXICO
# INSTITUTO TECNOLÓGICO DE OAXACA


### **Carrera:** Ingeniería en Sistemas Computacionales
### **Materia:** Programación Web


### **Unidad 2:** HTML, XML Y CSS

### **Alumno:** Martínez González Ricardo  
### **Matrícula:** 23161012

### **Docente:** Adelina Martinez Nieto

### **Grupo:** 7SC  
### **Horario:** 10:00 – 13:00 hrs

---


</div>

### El Problema que Resuelve
Primero el uso de tooltips es muy común en cualquier página web y por eso mismo que utilizan muchas y de diferentes estilos es repetitivo y tedioso tener que crear cada tooltip completamente a mano y esto es lo que resuelte este componente, hacerlas reutilizables.

### La Solución
Dentro del HTML con el atributo "data-texto" y "data-tipo" puedes poner el texto la clase que se le atribuyen respectivamente. 

---

# Instalación

Para integrar este componente en cualquier proyecto HTML, incluye los archivos en el head siguiendo la siguiente estructura.

![Captura de pantalla](./img/estructura.png)

### 1. Incluir el CSS (Estilos)
Añade el css en la etiqueta `<head>` de tu archivo HTML:

```html
<link rel="stylesheet" href="./css/componente.css">
```

### 2. Incluir el JS (lógica)
Añade el js en la etiqueta `<head>` de tu archivo HTML:

```html
<script src="./js/componente.js"></script>
```

---

## Uso y Ejemplos de Código

A continuación se muestra el código real y la estructura necesaria para implementar el componente en tu proyecto.

### 1. Estructura HTML
Al ser un tooltip es muy sencillo añadirlo solo se añade el siguiente código en tu archivo HTML para renderizar la estructura base del componente.
NOTA: Puede ser cualquier etiqueta solo que tiene que llevar los atributos `onmouseover`, `onmouseout`, `data-texto` que es para el texto que llevará el tooltip y `data-tipo` que será la clase de css para su diseño específico.

```html
<button onmouseover="mostrarTooltip(this)" onmouseout="ocultarTooltip()" data-texto="Guardado con éxito" data-tipo="valido" class="boton">Guardar</button>
```

### 2. Estructura CSS
Como ya se mencionó aqui solamente se agregaria una clase al final que sería la misma que el `data-tipo`, y se pondrá el diseño que se quiere del tooltip (Ya tiene un diseño simple base, pero se puede reescribir)

```css
.valido {
    background-color: #2ecc71;
}
```
### 3. Visualización
Asi quedaria con esas pocas lineas de código html y css que pusimos

![Prueba funcioanal](./img/test.png)

Asi de simple y fácil es utilizar este componente de tooltips.