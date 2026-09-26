import type { HookParameters } from "@astrojs/starlight/types";

export type StarlightUserConfig = HookParameters<"config:setup">["config"];
