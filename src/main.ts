import { app } from "./app";
import { loadConfig, setupLogger } from "./config";

/**
 * Main entry point that initializes config, logger, and runs the app.
 * @example main() // Logs config and runs app(1, 2)
 */
function main(): void {
  const cfg = loadConfig();
  const logger = setupLogger(cfg.logLevel);
  logger.info(`Running with config: ${JSON.stringify(cfg)}`);

  app(1, 2);
}
main();
