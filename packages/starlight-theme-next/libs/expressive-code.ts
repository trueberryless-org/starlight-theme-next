import type { StarlightUserConfig } from "./starlight";

export function getExpressiveCodeConfig(
  expressiveCode: StarlightUserConfig["expressiveCode"]
): StarlightUserConfig["expressiveCode"] {
  if (expressiveCode === false) return false;

  const userConfig = getUserExpressiveCodeConfig(expressiveCode);

  return {
    themes: ["vitesse-dark", "vitesse-light"],
    ...userConfig,
    styleOverrides: {
      borderColor: "var(--sl-color-gray-5)",
      borderRadius: "0.5rem",
      ...userConfig.styleOverrides,
      frames: {
        editorActiveTabIndicatorTopColor: "unset",
        editorActiveTabIndicatorBottomColor: "var(--sl-color-gray-3)",
        editorTabBarBorderBottomColor: "var(--sl-color-gray-5)",
        frameBoxShadowCssValue: "unset",
        ...userConfig.styleOverrides?.frames,
      },
    },
  };
}

function getUserExpressiveCodeConfig(
  expressiveCode: StarlightUserConfig["expressiveCode"]
): ExpressiveCodeOptions {
  return !expressiveCode || expressiveCode === true ? {} : expressiveCode;
}

type ExpressiveCodeOptions = Exclude<
  NonNullable<StarlightUserConfig["expressiveCode"]>,
  boolean
>;
