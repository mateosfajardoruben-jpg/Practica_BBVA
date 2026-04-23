# Simulador Gestor BBVA

SPA basada en la arquitectura de componentes web nativos construida con Lit. Simula el entorno de gestión de usuarios de BBVA, permitiendo agregar, visualizar y eliminar clientes de forma dinámica e instantánea.

## Tecnologías utilizadas

- **Lit:** Librería ligera para crear componentes web reactivos sin necesidad de utilizar TypeScript.
- **Vite:** Herramienta de compilación rápida y servidor de desarrollo.
- **CSS:** Estilos encapsulados dentro del Shadow DOM y variables globales para mantener la temática corporativa.

## Estructura del proyecto

El proyecto sigue una estructura limpia, separando lógica, estilos, y responsabilidades:

- **`/src/components/`**: Elementos estructurales de la app (Header, Menú lateral, Enrutador base).
- **`/src/pages/`**: Vistas renderizadas dinámicamente según la navegación (Agregar, Mostrar, Borrar).
- **Archivos `.css.js`**: Patrón de estilos externos para mantener los scripts JS limpios y mantenibles.
- **`userStore.js`**: Simulación de un estado global persistente en memoria (array de almacenamiento) para compartir los datos entre las distintas vistas.

## Funcionalidades principales

- **Agregar Usuario:** Formulario en doble columna con previsualización en tiempo real. Incluye validación de campos vacíos y protección contra correos electrónicos duplicados.
- **Mostrar Usuarios:** Sistema de acordeón reactivo que despliega los detalles adicionales del usuario seleccionado de forma exclusiva (cierra automáticamente los demás).
- **Borrar Usuarios:** Panel de administración para eliminar registros de la base de datos global, actualizando el DOM y la interfaz de manera inmediata.

---
