# Frontend - Like Me

Este frontend es una aplicación React que consume el backend de "Like Me".

## Requisitos

- Node.js

## Instalación

1. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Inicia la aplicación en modo desarrollo:
   ```
   npm run dev
   ```

2. Accede a la aplicación en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

## Notas

- El frontend espera que el backend esté corriendo en [http://localhost:3000](http://localhost:3000).
- Puedes modificar la URL del backend en el archivo `src/App.jsx` si es necesario.
- Todas las operaciones CRUD (crear, leer, actualizar likes y eliminar posts) se realizan utilizando `fetch` para cumplir con los requerimientos del desafío.

## Cumplimiento de Requerimientos

- El frontend implementa un CRUD completo utilizando `fetch` para interactuar con la API REST del backend.
- Se pueden crear, listar, dar like y eliminar posts desde la interfaz.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
