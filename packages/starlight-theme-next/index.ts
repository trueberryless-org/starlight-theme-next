import type { StarlightPlugin } from "@astrojs/starlight/types";

import { getCustomCss } from "./libs/css";
import { getExpressiveCodeConfig } from "./libs/expressive-code";

export default function starlightThemeNext(): StarlightPlugin {
  return {
    name: "starlight-theme-next",
    hooks: {
      "config:setup"({ config, updateConfig }) {
        updateConfig({
          customCss: getCustomCss(config.customCss),
          expressiveCode: getExpressiveCodeConfig(config.expressiveCode),
        });
      },
    },
  };
}
