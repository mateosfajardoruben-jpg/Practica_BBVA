## Simulador Gestor BBVA

SPA basada en la arquitectura de componentes web nativos construida con Lit. Simula el entorno de gestion de usuarios de BBVA, permitiendo agregar, visualizar y eliminar clientes de forma dinámica e instantanea.

## Tecnologías utilizadas

-Lit: Librería ligera para crear componentes web reactivos sin necesidad de utilizar TypeScritp.
-Vite: Herramienta de compilación rápida y servidor de desarrollo.
-CSS: Estilos encapsulados dentro del Shadow DOM y variables globales para mantener la tematica corporativa.

## Estructrua del proyecto

El proyecto sigue una estructura limpia separando lógica, estilos, y responsabilidades:
_\`/src/components\`:Elementos estructurales de la app (Header, Menu lateral, Enrutador base ).
_\`/src/pages\`: Vistas renderizadas dinamicamente según la navegactión (Agregar, Mostrar, Borrar).
_\`.css.js\`: Patrón de estilos externos para mantener los JS limpios y mantenibles.
_\`userStore.js\`: Simulación de un estado global persistente en memoria para compartir los datos entre vistas.

## Funcionalidades principales

-Agregar Usuario: Formulario en doble columna con previsualización en tiempo real. Incluye validación de campos vacíos y proteccion contra correos electrónicos duplicados.
-Mostrar Usuarios: Sistema de acordeón reactivo que despliega los detalles adicionales del usuario seleccionado de forma exclusiva (cierra automaticamente los demas).
-Borrar Usuarios: Panel de administración para eliminar registros de la base de datos global(en este caso el user.store.js que es un array vacio que vamos llenando) actualizando el DOM inmediatamente.
