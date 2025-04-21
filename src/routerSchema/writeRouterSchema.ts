import { routerSchemaMethod } from '@app-marble-api-router-validation-schema-generator/routerSchemaMethod';

export const writeRouterSchema = (routerSchemaName, routerSchemaObjs, routerSchemasDirPath) => {
  const routerSchemaObj = routerSchemaObjs[routerSchemaName];
  const methodNames = Object.keys(routerSchemaObj);

  const routerSchemaMethodNames = methodNames.map((methodName) => {
    return routerSchemaMethod.write(methodName, routerSchemaObj, routerSchemaName, routerSchemasDirPath);
  });

  return routerSchemaMethodNames;
};
