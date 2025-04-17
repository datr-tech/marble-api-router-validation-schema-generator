import path from 'node:path';

export const deriveRouterSchemasIndexPath = (routerSchemasDirPath) => {
  const routerSchemasIndexPath = path.resolve(`${routerSchemasDirPath}/index.ts`);

  return routerSchemasIndexPath;
};
