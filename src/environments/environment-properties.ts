import { Environment } from "../app/core/enums/Environment";

export interface EnvironmentProperties {
  /**
   * The currently active environment
   */
  environment: Environment;

  /**
   * The base url of the backend service (without a trailing slash)
   */
  backendBaseUrl: string;
}
