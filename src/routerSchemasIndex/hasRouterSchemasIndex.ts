import fs from 'node:fs';

export const hasRouterSchemasIndex = (routerSchemasIndexPath) => fs.existsSync(routerSchemasIndexPath);
