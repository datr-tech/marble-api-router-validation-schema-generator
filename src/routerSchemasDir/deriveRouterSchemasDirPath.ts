import path from 'node:path';
import { routerServiceSuffix } from '@app/config';

export const deriveRouterSchemasDirPath = (service) => {
  const routerSchemasDirPath = path.resolve(`./../${service}-${routerServiceSuffix}/src/schemas`);

  return routerSchemasDirPath;
};
