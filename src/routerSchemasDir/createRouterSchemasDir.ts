import fs from 'node:fs';

export const createRouterSchemasDir = (routerSchemasDirPath) => fs.mkdirSync(routerSchemasDirPath, { recursive: true });
