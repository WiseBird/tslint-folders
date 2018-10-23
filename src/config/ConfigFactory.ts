import { FilenamesRuleConfig } from "../model/FilenamesRuleConfig";
import { ImportsBetweenPackagesRuleConfig } from "../model/ImportsBetweenPackagesRuleConfig";
import { FILE_NAMES_RULE_ID } from "../tsLintFoldersFileNamesRule";
import { IMPORTS_BETWEEN_PACKAGES_RULE_ID } from "../tsLintFoldersImportsBetweenPackagesRule";

export namespace ConfigFactory {
  export function createForBetweenPackages(
    options: any
  ): ImportsBetweenPackagesRuleConfig {
    const config = create<ImportsBetweenPackagesRuleConfig>(
      options,
      IMPORTS_BETWEEN_PACKAGES_RULE_ID
    );

    // TODO xxx validate a bit (at least importPath should be set, allowedToImport should refer to recognised importPath)

    return config;
  }

  export function createForFilenames(options: any): FilenamesRuleConfig {
    const config = createFromArguments<FilenamesRuleConfig>(
      options,
      FILE_NAMES_RULE_ID
    );

    config.casings = (<any>config)["file-name-casing"];

    validate(config, "casings", FILE_NAMES_RULE_ID);
    validate(config, "ignorePaths", FILE_NAMES_RULE_ID);

    return config;
  }

  function validate(config: any, prop: string, ruleId: string) {
    if (config[prop] === undefined) {
      throw new Error(`invalid config for rule ${ruleId} - ${prop} is missing`);
    }
  }

  function create<T>(options: any, ruleId: string): T {
    if (options.length !== 1) {
      throw new Error(
        `tslint rule is misconfigured (${ruleId}) - options length is ${
          options.length
        }`
      );
    }

    const config: T = options[0].config;
    return config;
  }

  function createFromArguments<T>(options: any, ruleId: string): T {
    const args = options.ruleArguments;

    if (args.length !== 1) {
      throw new Error(
        `tslint rule is misconfigured (${ruleId}) - options.ruleArguments length is ${
          args.length
        }`
      );
    }

    const config: T = args[0];

    return config;
  }
}
