# Herramientas utilizadas

## Herramienta(s) usada(s)

- Node.js
- Express
- TypeScript
- PostgreSQL
- Postman

## ¿En qué partes las usaste?

- **Docker / PostgreSQL:** Orquestación de la base de datos mediante contenedores e inserción de datos mediante scripts SQL.
- **Node.js / Express / TypeScript:** Implementación de la API REST, configuración del servidor, middlewares y definición de tipos.
- **Arquitectura por capas:** Estructuración del código en controladores, repositorios, rutas y configuración de la base de datos.
- **Postman:** Pruebas e integración de una colección para la verificación de endpoints y del CRUD completo.

## ¿Qué cambiaste / entendiste?

- Entendí la separación de responsabilidades organizando la lógica de la API en una arquitectura clara: **Routes → Controllers → Repositories → DB**.
- Aprendí a implementar consultas SQL dinámicas en el repositorio utilizando cláusulas parametrizadas (`$1`, `$2`, etc.) para manejar múltiples filtros de búsqueda de forma segura.
- Comprendí el uso de `tsx watch` para la ejecución y recarga en caliente del entorno de desarrollo con TypeScript, sin necesidad de recompilar manualmente después de cada cambio.

## ¿Qué harías diferente con más tiempo?

- Implementaría un ORM o Query Builder, como **Prisma** o **TypeORM**, además de migraciones automáticas para evitar la administración manual de scripts SQL.
- Mejoraría y ampliaría la implementación de **Helmet** para reforzar la configuración de seguridad de la API.

## Uso de Inteligencia Artificial

Se utilizaron las siguientes herramientas de Inteligencia Artificial:

- **Gemini**
- **ChatGPT**

### ¿En qué partes se utilizó?

- **Consultoría de arquitectura y código:** Guía paso a paso para estructurar las rutas `GET` y `POST` utilizando TypeScript y la librería `pg`.
- **Seguridad en SQL:** Apoyo para la implementación del operador `ILIKE`, permitiendo realizar búsquedas sin distinguir entre mayúsculas y minúsculas, así como el uso de parámetros posicionales (`$1`, `$2`, `$3`) para prevenir inyección SQL.
- **Documentación del proyecto:** Apoyo en la redacción técnica del `README.md` y de la documentación de la API.
- **Pruebas:** Apoyo en la creación y estructuración de la colección de Postman para verificar los diferentes endpoints y operaciones CRUD.