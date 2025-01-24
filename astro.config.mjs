// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://brickhouse-php.github.io',
  integrations: [
    starlight({
      title: "Brickhouse",
      social: {
        github: "https://github.com/brickhouse-php/brickhouse-php.github.io",
      },
      editLink: {
        baseUrl: "https://github.com/brickhouse-php/docs/edit/main/",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Routing",
          autogenerate: { directory: "routing" },
        },
      ],
      expressiveCode: {
        themes: ["github-dark", "github-light"],
        styleOverrides: {
          frames: {
            editorActiveTabBackground: ["#1d293d", "#fdfdfd"],
            editorActiveTabForeground: ["#7f96ac", "#5c7287"],
            editorActiveTabIndicatorTopColor: ["#1d293d", "#fdfdfd"],
            editorBackground: ["#1d293d", "#fdfdfd"],
            editorTabBarBackground: ["#1d293d", "#fdfdfd"],
            editorTabBarBorderBottomColor: ["#1d293d", "#fdfdfd"],
            terminalBackground: ["#1d293d", "#fdfdfd"],
            shadowColor: "transparent",
          },
        },
      },
      components: {
        Pagination: "./src/components/Pagination.astro",
      },
      customCss: ["./src/styles/custom.css", "./src/tailwind.css"],
    }),
    tailwind(),
  ],
});
