import { ConfigProvider } from "tabby-core";
import { HighlightPluginConfig } from "./api";

/** @hidden */
export class HighlightConfigProvider extends ConfigProvider {
  defaults: { highlightPlugin: HighlightPluginConfig } = {
    highlightPlugin: {
      highlightEnabled: false,
      highlightAlternateDisable: false,
      highlightMode: "xterm-control-sequence",
      highlightCurrentProfile: "60606be0-c0ff-42bc-bf77-de8a2435447f",
      highlightProfiles: [
        {
          id: "60606be0-c0ff-42bc-bf77-de8a2435447f",
          name: "Default",
          keywords: [
            {
              text: "ERROR",
              enabled: true,
              background: true,
              backgroundColor: "1",
            },
            {
              text: "WARN",
              enabled: true,
              background: true,
              backgroundColor: "3",
            },
            {
              text: "INFO",
              enabled: true,
              background: true,
              backgroundColor: "6",
            },
            {
              text: "FEHLER",
              enabled: true,
              background: true,
              backgroundColor: "1",
            },
            {
              text: "WARNUNG",
              enabled: true,
              background: true,
              backgroundColor: "3",
            },
          ],
        },
      ],

      highlightPerSessionEnabled: false,
      highlightPerSessionProfileMap: [],
      highlightPerSessionGroupEnabled: false,
      highlightPerSessionGroupProfileMap: [],
      highlightPerSessionTypeEnabled: false,
      highlightPerSessionTypeProfileMap: [],
      highlightGlobalEnabled: true,
      replaceEnabled: false,
      replaceAlternateDisable: false,
      replaceCurrentProfile: "986666dd-dac9-4c7a-a295-9b4aff66abdd",
      replaceProfiles: [
        {
          id: "986666dd-dac9-4c7a-a295-9b4aff66abdd",
          name: "Default",
          patterns: [
            { enabled: false, search: "ERROR", replace: "FEHLER" },
            { enabled: false, search: "WARN", replace: "WARNUNG" },
          ],
        },
      ],
      advanced: {
        debug: false,
        debugTerminalOutput: false,
        debugPluginOutput: false,
        debugMatch: false,
      },
    },
  };
}
