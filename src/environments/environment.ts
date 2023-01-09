import { EnvironmentProperties } from './environment-properties';
import { Environment } from '../app/core/enums/Environment';

export const environment: EnvironmentProperties = {
    environment: Environment.DEVELOPMENT,
    backendBaseUrl: 'https://localhost:5000/api',
};
