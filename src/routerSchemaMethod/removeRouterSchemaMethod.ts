import fs from 'node:fs';

export const removeRouterSchemaMethod = (routerMethodSchemaPath) => fs.unlinkSync(routerMethodSchemaPath, { recursive: true });
