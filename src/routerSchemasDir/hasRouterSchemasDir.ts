import fs from 'node:fs';

export const hasRouterSchemasDir = (routerSchemasDirPath) => fs.existsSync(routerSchemasDirPath);
