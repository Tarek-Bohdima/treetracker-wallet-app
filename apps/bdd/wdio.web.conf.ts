import type { Options } from "@wdio/types";
import { baseConfig } from "./wdio.base.conf";
import { CAPABILITY_WEB_CHROME } from "./utils/capabilities";

export const config: Options.Testrunner = {
  ...baseConfig,

  // Web-specific capabilities
  capabilities: CAPABILITY_WEB_CHROME,

  services: [],

  // Web-specific cucumber tags
  cucumberOpts: {
    ...baseConfig.cucumberOpts,
    tags: "@web and not @skip",
  },

  // Web-specific hooks
  before: function () {
    console.log("🌐 Starting WEB test session...");
  },
} as unknown as Options.Testrunner;
