# starlight-theme-next

## 0.3.3

### Patch Changes

- [#51](https://github.com/trueberryless-org/starlight-theme-next/pull/51) [`179c35a`](https://github.com/trueberryless-org/starlight-theme-next/commit/179c35aefdd6acd51bce638941379f3e5e427c58) Thanks [@trueberryless-org](https://github.com/apps/trueberryless-org)! - Setups trusted publishing using OpenID Connect (OIDC) authentication — no code changes.

## 0.3.2

### Patch Changes

- [`8262f4c`](https://github.com/trueberryless-org/starlight-theme-next/commit/8262f4c71734fcfcbf522117b527c194c5a6ffbd) Thanks [@trueberryless](https://github.com/trueberryless)! - Make mobile toc even more little by decreasing the height to 3.5rem

## 0.3.1

### Patch Changes

- [`15a98fd`](https://github.com/trueberryless-org/starlight-theme-next/commit/15a98fdc78175895f2d74d3aa9b91b345df7dfbc) Thanks [@trueberryless](https://github.com/trueberryless) and [@tsavpyn](https://github.com/tsavpyn)! - Fix mobile table of contents takes up too much space

## 0.3.0

### Minor Changes

- [`e0537f3`](https://github.com/trueberryless-org/starlight-theme-next/commit/e0537f3dd70c8ad5d4702cc5059060c64a5ff05f) Thanks [@trueberryless](https://github.com/trueberryless)! - Rename NPM package to starlight-theme-next

### Patch Changes

- [`9f032da`](https://github.com/trueberryless-org/starlight-theme-next/commit/9f032da50ff24c37b48eaa1c0060439ebfbedab7) Thanks [@trueberryless](https://github.com/trueberryless)! - Make pagination labels and arrows more subtle and adjust margins and sizes

- [`24cd5c2`](https://github.com/trueberryless-org/starlight-theme-next/commit/24cd5c229370fd5c056593f25be6c98c118f9c45) Thanks [@trueberryless](https://github.com/trueberryless)! - Fix spacing between social icons when screen width is between 800px and 1151px

## 0.2.1

### Patch Changes

- [`fa2e281`](https://github.com/trueberryless-org/starlight-theme-next/commit/fa2e28104b334a8a15626deea8fa1006def9cc11) Thanks [@trueberryless](https://github.com/trueberryless)! - Improve the accessibility of the Table of Contents by highlighting the active heading with the accent color.

## 0.2.0

### Minor Changes

- [#14](https://github.com/trueberryless-org/starlight-theme-next/pull/14) [`623d0c7`](https://github.com/trueberryless-org/starlight-theme-next/commit/623d0c7e561bf53c5c3dc9d932e59a605245a7aa) Thanks [@trueberryless](https://github.com/trueberryless)! - Groups all of the Starlight Next.js theme CSS declarations into a single `nextjs` [cascade layer](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers).

  This change aligns with the Starlight CSS architecture and allows for easier customization of the Starlight Next.js theme CSS as any custom unlayered CSS will override the default styles. If you are using cascade layers in your custom CSS, you can use the [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) CSS at-rule to define the order of precedence for different layers including the ones used by Starlight and the Starlight Next.js theme.

  Make sure to check your site’s appearance when upgrading to make sure there are no style regressions caused by this change.

- [#14](https://github.com/trueberryless-org/starlight-theme-next/pull/14) [`623d0c7`](https://github.com/trueberryless-org/starlight-theme-next/commit/623d0c7e561bf53c5c3dc9d932e59a605245a7aa) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now version `0.34.0`.

  Please use the `@astrojs/upgrade` command to upgrade your project:

  ```sh
  npx @astrojs/upgrade
  ```

### Patch Changes

- [#14](https://github.com/trueberryless-org/starlight-theme-next/pull/14) [`4a3ba25`](https://github.com/trueberryless-org/starlight-theme-next/commit/4a3ba257a0f60652fe7eaa049d2dc800cfee7b90) Thanks [@trueberryless](https://github.com/trueberryless)! - Fixes a banner position issue when using a banner in pages with a sidebar.

- [#14](https://github.com/trueberryless-org/starlight-theme-next/pull/14) [`39abcc1`](https://github.com/trueberryless-org/starlight-theme-next/commit/39abcc1f2310f42e4417891453e703a70ae517e7) Thanks [@trueberryless](https://github.com/trueberryless)! - Fixes an issue where nested user-defined Expressive Code settings were not being applied correctly.

## 0.1.4

### Patch Changes

- [`ba3a9df`](https://github.com/trueberryless-org/starlight-theme-next/commit/ba3a9df11896b701dab098f3b3dfb85808f94c71) Thanks [@trueberryless](https://github.com/trueberryless)! - Fix width of banner being too large when ToC is not visible

## 0.1.3

### Patch Changes

- [#9](https://github.com/trueberryless-org/starlight-theme-next/pull/9) [`65eb62a`](https://github.com/trueberryless-org/starlight-theme-next/commit/65eb62a9587e9eeabe85e5f9cbfde2360590eef2) Thanks [@trueberryless](https://github.com/trueberryless)! - Fix margin between social icons, make whitespace between sidebar and content bigger

## 0.1.2

### Patch Changes

- [#4](https://github.com/trueberryless-org/starlight-theme-next/pull/4) [`479a7dc`](https://github.com/trueberryless-org/starlight-theme-next/commit/479a7dc28391670e701d4baa23ddadc472bf0624) Thanks [@trueberryless](https://github.com/trueberryless)! - Add keywords and lower peerDep to Starlight 0.30 because it's just CSS

## 0.1.1

### Patch Changes

- [`0ef41c9`](https://github.com/trueberryless-org/starlight-theme-next/commit/0ef41c9ce7fcbe8aa101cc5bcfba4dbab11b037b) Thanks [@trueberryless](https://github.com/trueberryless)! - Fix @fontsource installed in root package

## 0.1.0

### Minor Changes

- [`ee9ce1e`](https://github.com/trueberryless-org/starlight-theme-next/commit/ee9ce1ef4fec571f1ce7fa6c288baa5b68a23760) Thanks [@trueberryless](https://github.com/trueberryless)! - Initial public release
