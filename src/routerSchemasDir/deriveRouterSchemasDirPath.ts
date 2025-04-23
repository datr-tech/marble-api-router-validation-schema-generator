import path from 'node:path';
import { routerServiceSuffix } from '@app-marvsg/config';

export const deriveRouterSchemasDirPath = (service) => {
  const routerSchemasDirPath = path.resolve(`./../${service}-${routerServiceSuffix}/src/schemas`);

  return routerSchemasDirPath;
};
