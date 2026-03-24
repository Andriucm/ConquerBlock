# conquer-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```

## Workspace Governance

### Rol del repositorio

- Cohorte: B
- Rol: Espejo transitorio de `C:\code\vue-template`
- Estado: read-only operativo para cambios funcionales

### Restriccion de edicion

No se permiten cambios funcionales directos en este repositorio. Solo se aceptan:

- actualizaciones de sincronizacion desde el canonico,
- metadata de paridad (commit ancla, estado de ventana, checklist),
- documentacion de estado del espejo.

### Criterio de violacion de politica

Se considera violacion cualquier PR que modifique codigo funcional (`src/`, `components/`, `views/`) sin cambio previo equivalente en el canonico.

### Dependencias y lockfile

- Package manager declarado: `bun`
- Lockfile esperado en raiz: `bun.lock`
