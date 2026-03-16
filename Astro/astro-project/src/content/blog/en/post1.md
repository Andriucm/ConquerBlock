---
title: "Getting Started with Astro and i18n"
excerpt: "Learn how to build a multilingual blog using Astro's built-in i18n support."
---

# Welcome to My Blog!

Astro makes it incredibly easy to create fast, multilingual websites. In this post, I’ll walk you through the basics of setting up internationalized routing and content.

## Why Astro?

Astro is a modern static site builder that delivers lightning-fast performance by default. With its partial hydration and island architecture, you can build interactive components without sacrificing speed.

## Setting Up i18n

Astro provides first-class internationalization support through the `i18n` integration. You can define your locales in the config and use utilities like `getRelativeLocaleUrl` to generate localized links.

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
