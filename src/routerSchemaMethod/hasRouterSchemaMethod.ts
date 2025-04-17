import fs from 'node:fs';

export const hasRouterSchemaMethod = (routerMethodSchemaPath) => fs.existsSync(routerMethodSchemaPath);
