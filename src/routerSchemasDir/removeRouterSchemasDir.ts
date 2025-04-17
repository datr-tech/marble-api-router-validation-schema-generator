import { rimrafSync } from 'rimraf';

export const removeRouterSchemasDir = (routerSchemasDirPath) => rimrafSync(routerSchemasDirPath, { recursive: true });
