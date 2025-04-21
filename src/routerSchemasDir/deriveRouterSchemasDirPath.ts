import path from 'node:path';
import { routerServiceSuffix } from '@app-marble-api-router-validation-schema-generator/config';

export const deriveRouterSchemasDirPath = (service) => {
  const routerSchemasDirPath = path.resolve(`./../${service}-${routerServiceSuffix}/src/schemas`);

  return routerSchemasDirPath;
};
