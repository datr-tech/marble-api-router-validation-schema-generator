import { createRouterSchemasDir } from './createRouterSchemasDir';
import { deriveRouterSchemasDirPath } from './deriveRouterSchemasDirPath';
import { hasRouterSchemasDir } from './hasRouterSchemasDir';
import { removeRouterSchemasDir } from './removeRouterSchemasDir';
import { resetRouterSchemasDir } from './resetRouterSchemasDir';

export const routerSchemasDir = {
  create: createRouterSchemasDir,
  derivePath: deriveRouterSchemasDirPath,
  hasDir: hasRouterSchemasDir,
  remove: removeRouterSchemasDir,
  reset: resetRouterSchemasDir,
};
