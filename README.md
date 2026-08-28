# Ludoteca API

API REST para administrar una ludoteca de juegos de mesa.

## Tecnologías y versiones

Las versiones indicadas a continuación se toman de los archivos de configuración del proyecto.

| Herramienta / dependencia | Versión   |
| ------------------------- | --------- |
| Node.js                   | `22.23.2` |
| TypeScript                | `7.0.2`   |
| Express                   | `5.2.1`   |
| PostgreSQL                | `17`      |
| pg                        | `8.23.0`  |
| dotenv                    | `17.4.2`  |
| helmet                    | `8.3.0`   |
| tsx                       | `4.23.12` |
| @types/express            | `5.0.6`   |
| @types/node               | `26.4.0`  |
| @types/pg                 | `8.23.1`  |

## Requisitos previos

Antes de levantar el proyecto necesitas tener instalado:

- Docker
- Docker Compose
- Node.js y npm
- Git, si vas a clonar el proyecto

El proyecto utiliza PostgreSQL 17 mediante Docker.

## Estructura relevante

```text
.
├── docker-compose.yml
├── env.example
├── package.json
├── tsconfig.json
├── sql/
│   └── gameTable.sql
└── src/
    ├── app.ts
    ├── server.ts
    ├── config/
    ├── controllers/
    ├── repositories/
    ├── routes/
    ├── services/
    ├── types/
    └── utils/
```

## 1. Configurar las variables de entorno

Copia el archivo de ejemplo:

```bash
cp env.example .env
```

En Windows PowerShell:

```powershell
Copy-Item env.example .env
```

El archivo `.env` debe contener:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=ludoteca
DB_USER=ludoteca_user
DB_PASSWORD=ludoteca_password
```

Estas variables son utilizadas por la aplicación para conectarse a PostgreSQL.

## 2. Levantar PostgreSQL con Docker

Desde la raíz del proyecto ejecuta:

```bash
docker compose up -d
```

Esto crea/inicia el contenedor:

```text
ludoteca-postgres
```

y expone PostgreSQL en:

```text
localhost:5432
```

La configuración de Docker utiliza:

```text
Base de datos: ludoteca
Usuario:       ludoteca_user
Password:      ludoteca_password
PostgreSQL:    17
```

Para comprobar que el contenedor está funcionando:

```bash
docker compose ps
```

También puedes consultar los logs:

```bash
docker compose logs -f postgres
```

## 3. Crear la tabla de juegos

La aplicación utiliza una tabla llamada `games`.

El script SQL se encuentra en:

```text
sql/gameTable.sql
```

Si la tabla no ha sido creada automáticamente, puedes ejecutarlo dentro del contenedor con:

```bash
docker exec -i ludoteca-postgres psql -U ludoteca_user -d ludoteca < sql/gameTable.sql
```

En Windows PowerShell puedes utilizar:

```powershell
Get-Content .\sql\gameTable.sql | docker exec -i ludoteca-postgres psql -U ludoteca_user -d ludoteca
```

Para comprobar que la tabla existe:

```bash
docker exec -it ludoteca-postgres psql -U ludoteca_user -d ludoteca
```

Dentro de PostgreSQL:

```sql
\dt
```

## 3.1 Crear 20 juegos

El script SQL se encuentra en:

```text
sql/game.sql
```

Si los juegos no han sido creados automáticamente, puedes ejecutarlo dentro del contenedor con:

```bash
docker exec -i ludoteca-postgres psql -U ludoteca_user -d ludoteca < sql/game.sql
```

En Windows PowerShell puedes utilizar:

```powershell
Get-Content .\sql\game.sql | docker exec -i ludoteca-postgres psql -U ludoteca_user -d ludoteca
```

Y para consultar los juegos:

```sql
SELECT * FROM games;
```

Para salir:

```sql
\q
```

## 4. Instalar las dependencias

Con PostgreSQL levantado, instala las dependencias del proyecto:

```bash
npm install
```

El proyecto utiliza `package.json` para gestionar sus dependencias.

## 5. Levantar la API en modo desarrollo

Ejecuta:

```bash
npm run dev
```

El script ejecuta:

```text
tsx watch src/server.ts
```

Por defecto, la API queda disponible en:

```text
http://localhost:3000
```

## 6. Verificar que la API funciona

Puedes utilizar el navegador, Postman o `curl`.

### Health check

```bash
curl http://localhost:3000/health
```

Respuesta esperada:

```json
{
  "status": "ok"
}
```

## 7. Probar el endpoint de juegos

Obtener todos los juegos:

```bash
curl http://localhost:3000/api/games
```

Crear un juego:

```bash
curl -X POST http://localhost:3000/api/games \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Catan",
    "description": "Juego de estrategia",
    "category": "estrategia",
    "minPlayers": 3,
    "maxPlayers": 4,
    "minAge": 10,
    "stock": 5,
    "tags": ["estrategia", "familia"]
  }'
```

Obtener un juego por ID:

```bash
curl http://localhost:3000/api/games/1
```

Actualizar un juego:

```bash
curl -X PUT http://localhost:3000/api/games/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Catan actualizado",
    "description": "Descripción actualizada",
    "category": "estrategia",
    "minPlayers": 3,
    "maxPlayers": 4,
    "minAge": 10,
    "stock": 8,
    "tags": ["estrategia", "familia"]
  }'
```

Eliminar un juego:

```bash
curl -X DELETE http://localhost:3000/api/games/1
```

## 8. Filtros disponibles

El endpoint:

```text
GET /api/games
```

admite los siguientes filtros:

| Parámetro    | Ejemplo                          |
| ------------ | -------------------------------- |
| `search`     | `/api/games?search=ajedrez`      |
| `category`   | `/api/games?category=estrategia` |
| `minPlayers` | `/api/games?minPlayers=4`        |
| `inStock`    | `/api/games?inStock=true`        |

Los filtros se pueden combinar:

```text
GET /api/games?search=juego&category=estrategia&minPlayers=2&inStock=true
```

## 9. Detener los servicios

Para detener PostgreSQL:

```bash
docker compose stop
```

Para detener y eliminar los contenedores:

```bash
docker compose down
```

### Eliminar también los datos de PostgreSQL

**Cuidado:** esto elimina el volumen donde PostgreSQL almacena los datos.

```bash
docker compose down -v
```

Después de ejecutar este comando, la base de datos queda nuevamente vacía.

## 10. Levantar todo desde cero

Una instalación limpia puede realizarse siguiendo estos pasos:

```bash
# 1. Configurar variables
cp env.example .env

# 2. Levantar PostgreSQL
docker compose up -d

# 3. Crear la tabla
docker exec -i ludoteca-postgres psql -U ludoteca_user -d ludoteca < sql/gameTable.sql

# 4. Instalar dependencias
npm install

# 5. Levantar la API
npm run dev
```

Después verifica:

```text
http://localhost:3000/health
```

## 11. Postman

El proyecto cuenta con una colección de Postman para probar todas las rutas HTTP.

La variable principal de la colección es:

```text
baseUrl = http://localhost:3000
```

Importa en Postman:

```text
Ludoteca_API_Postman_Collection.json
```

La colección incluye pruebas para:

- `GET /health`
- `GET /api/games`
- Filtros de juegos
- `GET /api/games/:id`
- `POST /api/games`
- `PUT /api/games/:id`
- `DELETE /api/games/:id`

## 12. Arquitectura

La aplicación está organizada en diferentes capas:

```text
HTTP Request
     │
     ▼
Routes
     │
     ▼
Controllers
     │
     ▼
Services
     │
     ▼
Repositories
     │
     ▼
PostgreSQL
```

Las rutas de juegos están montadas bajo:

```text
/api/games
```

y la aplicación utiliza `helmet` y `express.json()` como middleware.

## 13. Base de datos

La tabla `games` contiene:

```text
id
name
description
category
min_players
max_players
min_age
stock
tags
created_at
updated_at
```

Las restricciones principales son:

- `name` es obligatorio.
- `category` es obligatorio.
- `min_players` debe ser mayor que 0.
- `max_players` debe ser mayor o igual que `min_players`.
- `min_age` debe ser mayor o igual que 0.
- `stock` debe ser mayor o igual que 0.

## 14. Comandos rápidos

```bash
# Levantar base de datos
docker compose up -d

# Ver estado
docker compose ps

# Ver logs
docker compose logs -f postgres

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Compilar
npm run build

# Producción
npm start

# Detener
docker compose down

# Detener y borrar datos
docker compose down -v
```
