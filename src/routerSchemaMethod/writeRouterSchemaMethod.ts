import fs from 'node:fs';
import { schemaFileExtension } from '@app-marvsg/config';
import { deriveRouterSchemaMethodName } from './deriveRouterSchemaMethodName';
import { deriveRouterSchemaMethodPath } from './deriveRouterSchemaMethodPath';
import { hasRouterSchemaMethod } from './hasRouterSchemaMethod';
import { removeRouterSchemaMethod } from './removeRouterSchemaMethod';

export const writeRouterSchemaMethod = (method, schema, schemaName, schemasDir, schemaExtension = schemaFileExtension) => {
  const routerSchemaMethodName = deriveRouterSchemaMethodName(method, schemaName);
  const routerSchemaMethodPath = deriveRouterSchemaMethodPath(schemaExtension, routerSchemaMethodName, schemasDir);
  const routerSchemaMethodContents = JSON.stringify(schema[method]);

  if (hasRouterSchemaMethod(routerSchemaMethodPath)) {
    removeRouterSchemaMethod(routerSchemaMethodPath);
  }

  fs.writeFileSync(routerSchemaMethodPath, routerSchemaMethodContents, 'utf8');

  return routerSchemaMethodName;
};
