# Like Me

Proyecto de red social básica donde los usuarios pueden crear publicaciones (posts), dar "like" y eliminar publicaciones.

## Estructura del Proyecto

- **backend/**: Servidor Node.js con Express y PostgreSQL para la gestión de posts y likes.
- **frontend/**: Aplicación React que consume el backend y muestra la interfaz de usuario.

## Requisitos

- Node.js
- PostgreSQL

## Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone <url-del-repositorio>
cd Desafio2 - Like Me Alberto Cid
```

### 2. Configura la base de datos

Ejecuta el script SQL para crear la base de datos y la tabla:

```bash
cd backend
psql -U postgres -f database.sql
```

Asegúrate de que los datos de conexión en `server.js` coincidan con tu configuración de PostgreSQL.

### 3. Inicia el backend

```bash
npm install
node server.js
```

El backend estará disponible en [http://localhost:3000](http://localhost:3000).

### 4. Inicia el frontend

En otra terminal:

```bash
cd ../frontend
npm install
npm run dev
```

El frontend estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

## Uso

- Crea nuevos posts llenando el formulario y presionando "Agregar".
- Da "like" a los posts usando el botón correspondiente.
- Elimina posts con el botón de eliminar.

## Cumplimiento de Requerimientos

- Se implementa una ruta PUT en la API REST para modificar registros (likes) en PostgreSQL.
- Se implementa una ruta DELETE en la API REST para eliminar registros en PostgreSQL.
- Todas las consultas SQL están protegidas con sentencias try/catch para capturar errores.
- El frontend realiza el CRUD utilizando `fetch` en React.

## Créditos

Desafío desarrollado como parte Desafio Latam - G86.

