import { defineConfig } from "astro/config";

export default defineConfig({
	i18n: {
		site: "https://Andriucm.github.io",
		base: "/ConquerBlock/Astro/astro-project",
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
