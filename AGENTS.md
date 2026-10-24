# app-music- — reglas para agentes (Claude, Kimi, Kilo, otros)

Frontend de App Music: catálogo de música por artista, álbum y pista.
Stack: Angular 22 (standalone, signals, zoneless, control flow `@if`/`@for`), formularios
reactivos, `HttpClient` con interceptores. Consume la API del repo
[`apirest_music_app`](https://github.com/David-Matos-Salvador/apirest_music_app).

- **Antes de dar algo por terminado:** `npm run lint`, `npm run format:check`, `npm test` y `npm run build`.
- **Publicar:** un push a `main` despliega en GitHub Pages (GitHub Actions). El repo es **público**
  porque GitHub Pages gratis no funciona en repos privados.
- **URLs de la API:** `src/environments/environment.ts` (producción) y
  `environment.development.ts` (local, `http://localhost:4000/api`).
- **Secretos:** ninguno en este repo. Todo lo que está aquí lo puede ver cualquiera.
- **Tareas:** se registran en el repo privado `infra` (Issues), que también tiene el mapa de todos
  los proyectos (`PROJECTS.md`).
- Comentarios y documentación en español; nombres de código en inglés.
