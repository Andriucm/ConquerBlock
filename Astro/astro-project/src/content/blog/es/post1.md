---
title: "Primeros pasos con Astro e i18n"
excerpt: "Aprende a construir un blog multilingüe utilizando el soporte integrado de i18n en Astro."
---

# ¡Bienvenido a mi Blog!

Astro hace que sea increíblemente fácil crear sitios web multilingües rápidos. En este post, te guiaré a través de los conceptos básicos para configurar enrutamiento internacionalizado y contenido.

## ¿Por qué Astro?

Astro es un moderno constructor de sitios estáticos que ofrece un rendimiento ultrarrápido por defecto. Con su hidratación parcial y arquitectura de islas, puedes construir componentes interactivos sin sacrificar la velocidad.

## Configurando i18n

Astro proporciona soporte de primera clase para internacionalización a través de la integración `i18n`. Puedes definir tus locales en la configuración y usar utilidades como `getRelativeLocaleUrl` para generar enlaces localizados.

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
});
```
