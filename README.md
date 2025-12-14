# PROYECTO GALERÍA

## DESCRIPCIÓN DEL PROYECTO
Proyecto desarrollado para consumir la API de Pexels para mostrar galería de imágenes, con búsqueda por categorías y paginación.

## INSTALACIÓN Y EJECUCIÓN
1. Haz fork en en el repositorio: https://github.com/95sonia/galeria-react
2. Instala las dependencias
``
yarn install
``
3. Configura tu APIKEYS de Pexels
    - Cambia el nombre del archivo env.template por .env
    - Añade tu clave de pexels
4. Ejecuta la aplicación
``
yarn start
``

## TECNOLOGÍAS UTILIZADAS
1. React
2. Fetech API
3. CSS
4. Render
5. Git/Github

## ESTRUCTURA DEL PROYECTO
```bash
src/
    assets/ 
       pexels-logo.svg
    components/
        Card.css
        Card.jsx
        Footer.css
        Footer.jsx
        Formulario.css
        Formulario.jsx
        Galeria.css
        Galeria.jsx
        GridGallery.css
        GridGallery.jsx
        Header.css
        Header.jsx
        Paginacion.css
        Paginacion.jsx
        Errores.jsx
        Errores.css
    hooks/
        useFetch.js
        useFormulario.js
        useLlamarApi.js
App.cs
App.jsx
index.css
main.jsx
```