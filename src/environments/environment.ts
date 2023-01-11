import { EnvironmentProperties } from './environment-properties';
import { Environment } from '../app/shared/enums/Environment';

export const environment: EnvironmentProperties = {
    environment: Environment.DEVELOPMENT,
    backendBaseUrl: 'https://localhost:5000/api',
};
