# App Music

Aplicación web para explorar y escuchar un catálogo de música organizado por artista, álbum y pista. Consume la API [apirest_music_app](https://github.com/david-matos-salvador/apirest_music_app).

**Stack:** Angular 22 (componentes standalone, signals, zoneless, control flow `@if`/`@for`) · Formularios reactivos · `HttpClient` con interceptores · Vitest · ESLint (angular-eslint) · Prettier

## Puesta en marcha

Requiere Node.js 22.22.3+ o 24.15+.

```bash
npm install
npm start          # http://localhost:4200
```

En desarrollo la app usa la API en `http://localhost:4000/api` (`src/environments/environment.development.ts`). Para producción, configura la URL pública de la API en `src/environments/environment.ts`.

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

El workflow `CI` ejecuta lint, tests y build en cada push y PR. En `main`, además, publica en GitHub Pages; para activarlo ve a **Settings → Pages → Source** y elige **GitHub Actions**.
