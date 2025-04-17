import { deriveRouterSchemaMethodName } from './deriveRouterSchemaMethodName';
import { deriveRouterSchemaMethodPath } from './deriveRouterSchemaMethodPath';
import { hasRouterSchemaMethod } from './hasRouterSchemaMethod';
import { removeRouterSchemaMethod } from './removeRouterSchemaMethod';
import { writeRouterSchemaMethod } from './writeRouterSchemaMethod';

export const routerSchemaMethod = {
  deriveName: deriveRouterSchemaMethodName,
  derivePath: deriveRouterSchemaMethodPath,
  exists: hasRouterSchemaMethod,
  remove: removeRouterSchemaMethod,
  write: writeRouterSchemaMethod,
};
