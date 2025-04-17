import { createRouterSchemasDir } from './createRouterSchemasDir';
import { deriveRouterSchemasDirPath } from './deriveRouterSchemasDirPath';
import { hasRouterSchemasDir } from './hasRouterSchemasDir';
import { removeRouterSchemasDir } from './removeRouterSchemasDir';

export const resetRouterSchemasDir = (service) => {
  const routerSchemasDirPath = deriveRouterSchemasDirPath(service);

  if (hasRouterSchemasDir(routerSchemasDirPath)) {
    removeRouterSchemasDir(routerSchemasDirPath);
  }

  createRouterSchemasDir(routerSchemasDirPath);

  return routerSchemasDirPath;
};
