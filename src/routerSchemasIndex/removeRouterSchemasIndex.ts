import { rimrafSync } from 'rimraf';

export const removeRouterSchemasIndex = (routerSchemasIndexPath) => rimrafSync(routerSchemasIndexPath);
