import { routerSchema } from '@app-marble-api-router-validation-schema-generator/routerSchema';
import { routerSchemasDir } from '@app-marble-api-router-validation-schema-generator/routerSchemasDir';

export const writeRouterService = (schemaObjsPerRouterService) => {
  const { schemas, service } = schemaObjsPerRouterService;
  const routerSchemasDirPath = routerSchemasDir.reset(service);
  const routerSchemaNames = Object.keys(schemas);
  const routerSchemaMethodNames = routerSchemaNames.reduce((acc, routerSchemaName) => {
    acc = acc.concat(routerSchema.write(routerSchemaName, schemas, routerSchemasDirPath));

    return acc;
  }, []);

  return {
    routerSchemaMethodNames,
    routerSchemasDirPath,
    service,
  };
};
