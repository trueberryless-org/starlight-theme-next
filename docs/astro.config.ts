import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";
import starlightThemeNext from "starlight-theme-next";

const site =
  (process.env.CONTEXT === "deploy-preview" ||
  process.env.CONTEXT === "branch-deploy"
    ? process.env.DEPLOY_PRIME_URL
    : process.env.URL) ?? "https://starlight-theme-next.netlify.app";

export default defineConfig({
  site,
  integrations: [
    starlight({
      credits: true,
      components: {
        Footer: "./src/components/Footer.astro",
      },
      title: "Starlight Theme Next.js",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: new URL("og.png", site).href,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Starlight theme inspired by the Next.js docs.",
          },
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-theme-next/edit/main/docs/",
      },
      plugins: [
        starlightThemeNext(),
        starlightPluginsDocsComponents({
          pluginName: "starlight-theme-next",
        }),
        starlightLinksValidator({
          exclude: ["#_"],
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "customization"],
        },
        {
          label: "Examples",
          items: [{ autogenerate: { directory: "examples" } }],
        },
      ],
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/felixs.dev",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/starlight-theme-next",
        },
      ],
    }),
  ],
});
