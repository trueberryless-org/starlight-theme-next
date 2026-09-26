import type { StarlightUserConfig } from "./starlight";

const fontFamilies = ["geist-mono", "geist-sans"] as const;
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export function getCustomCss(
  customCss: StarlightUserConfig["customCss"]
): NonNullable<StarlightUserConfig["customCss"]> {
  return [...(customCss ?? []), ...getFontStylesheets(), getThemeStylesheet()];
}

function getFontStylesheets(): string[] {
  return fontFamilies.flatMap((family) =>
    fontWeights.map((weight) => getFontStylesheet(family, weight))
  );
}

function getFontStylesheet(family: FontFamily, weight: FontWeight): string {
  return `starlight-theme-next/fonts/${family}/${weight}.css`;
}

function getThemeStylesheet(): string {
  return "starlight-theme-next/styles.css";
}

type FontFamily = (typeof fontFamilies)[number];
type FontWeight = (typeof fontWeights)[number];
