---
title: "Checklist para lanzar un blog multilenguaje en Astro"
excerpt: "Una lista practica para publicar en espanol e ingles con rutas limpias y contenido consistente."
---

# Checklist para lanzar en produccion

Cuando un blog pasa de demo a proyecto real, los detalles importan: estructura, rutas, contenido y coherencia visual.

## 1. Define el mapa de rutas

Mantener paridad entre idiomas evita enlaces rotos y simplifica el mantenimiento.

- `/es/` y `/en/` para home.
- `/es/blog/` y `/en/blog/` para el indice del blog.
- rutas dinamicas con `getStaticPaths` para cada locale.

## 2. Valida el contenido con schema

`src/content.config.ts` protege la calidad minima del contenido. Si falta `title` o `excerpt`, el build debe fallar.

## 3. Disena para lectura

Un blog no es solo texto: espaciado, tipografia, contraste y ritmo visual mejoran la retencion.

> Regla simple: cada pagina debe tener jerarquia clara, accion principal y navegacion obvia.

## 4. Verifica antes de publicar

- `npm run build`
- `npm run astro -- check`

Con esto reduces sorpresas en despliegue y mantienes una base estable para escalar.
