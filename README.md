# App Music

Aplicación web para explorar y escuchar un catálogo de música organizado por artista, álbum y pista. Consume la API [apirest_music_app](https://github.com/David-Matos-Salvador/apirest_music_app) desplegada en `https://api-app-music.davidmatos.lat`.

**Stack:** Angular 22 (componentes standalone, signals, zoneless, control flow `@if`/`@for`) · Formularios reactivos · `HttpClient` con interceptores · Vitest · ESLint (angular-eslint) · Prettier

## Migración con IA

Este proyecto fue modernizado y migrado con **asistencia de IA** (agentes de desarrollo):

- **Frontend:** de la versión antigua de Angular a **Angular 22** con arquitectura standalone, signals y zoneless.
- **API:** reescrita a **Node 22 + Express 5 + Mongoose 9** (repositorio [`apirest_music_app`](https://github.com/David-Matos-Salvador/apirest_music_app), rama `master`).
- **Infraestructura:** migrada de **Heroku + MongoDB Atlas** a un **VPS propio (Contabo) con Coolify**. La API corre en [`https://api-app-music.davidmatos.lat`](https://api-app-music.davidmatos.lat) y usa MongoDB, Redis y almacenamiento S3 (SeaweedFS) en contenedores Docker con volúmenes persistentes, todo dentro de la red privada del servidor.
- **CI/CD:** lint, tests y build en cada push/PR, y despliegue automático a GitHub Pages en `main`.

## Puesta en marcha

Requiere Node.js 22.22.3+ o 24.15+.

```bash
npm install
npm start          # http://localhost:4200
```

En desarrollo la app usa la API en `http://localhost:4000/api` (`src/environments/environment.development.ts`). En producción la URL ya está configurada en `src/environments/environment.ts` (`https://api-app-music.davidmatos.lat/api`).

## Scripts

| Script                   | Descripción                                                |
| ------------------------ | ---------------------------------------------------------- |
| `npm start`              | Servidor de desarrollo                                     |
| `npm run build`          | Build de producción en `dist/app-music/browser`            |
| `npm run build:gh-pages` | Build para GitHub Pages (base `/app-music-/` y `404.html`) |
| `npm test`               | Tests unitarios con Vitest                                 |
| `npm run lint`           | ESLint, incluidas reglas de accesibilidad en plantillas    |
| `npm run format`         | Prettier                                                   |

## Estructura

```
src/app/
  app.config.ts        # Providers: router, HttpClient + interceptor de auth
  app.routes.ts        # Rutas con carga diferida y guards
  core/
    api.ts             # URL de la API, URLs de ficheros, mensajes de error
    models.ts          # Tipos de los datos de la API
    auth/              # Sesión (signals), interceptor y guards
    catalog/           # Servicios de artistas, álbumes y canciones
    player/            # Estado global del reproductor
  layout/              # Shell (navegación) y barra del reproductor
  features/            # Páginas: login, inicio, artistas, álbumes, canciones, perfil
  shared/              # Componentes reutilizables: icono, portada, selector de ficheros…
```

## Despliegue

El workflow `CI` ejecuta lint, tests y build en cada push y PR. En `main`, además, publica en GitHub Pages (fuente **GitHub Actions**, ya activada) en `https://david-matos-salvador.github.io/app-music-/`.
