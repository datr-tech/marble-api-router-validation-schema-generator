export const deriveRouterSchemaMethodPath = (methodSchemaExtension, methodSchemaName, schemasDir) => {
  const methodSchemaPath = `${schemasDir}/${methodSchemaName}.${methodSchemaExtension}`;

  return methodSchemaPath;
};
