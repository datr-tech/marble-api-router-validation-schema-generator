export const deriveRouterSchemaMethodName = (method, schemaName) => {
  const prefix = schemaName.replace('Schema', '');
  const prefixRevised = prefix.replace('Model', '');

  const suffix = prefixRevised.charAt(0).toUpperCase() + prefixRevised.slice(1);
  const routerSchemaMethodName = `${prefixRevised}ValidationSchema${method}${suffix}`;

  return routerSchemaMethodName;
};
