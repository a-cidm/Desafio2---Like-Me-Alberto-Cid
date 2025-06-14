# Backend - Like Me

Este backend utiliza Node.js, Express y PostgreSQL para gestionar los posts y likes de la red social "Like Me".

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Instala las dependencias:
   ```
   npm install
   ```

2. Crea la base de datos y la tabla ejecutando el archivo `database.sql` en PostgreSQL:
   ```
   psql -U postgres -f database.sql
   ```

3. Configura la conexión a la base de datos en `server.js` si es necesario.

## Uso

1. Inicia el servidor:
   ```
   node server.js
   ```

2. El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## Endpoints

- `GET /posts` - Obtiene todos los posts.
- `POST /posts` - Crea un nuevo post.
- `PUT /posts/like/:id` - Agrega un like a un post.
- `DELETE /posts/:id` - Elimina un post.

### Cumplimiento de Requerimientos

- **Ruta PUT**: Se utiliza la ruta `PUT /posts/like/:id` para modificar el número de likes de un post en la base de datos PostgreSQL.
- **Ruta DELETE**: Se utiliza la ruta `DELETE /posts/:id` para eliminar un registro de la tabla `posts` en PostgreSQL.
- **Manejo de errores**: Todas las consultas SQL realizadas con el paquete `pg` están envueltas en sentencias `try/catch` para capturar posibles errores y responder adecuadamente.

