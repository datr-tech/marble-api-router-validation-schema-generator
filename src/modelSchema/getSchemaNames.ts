export const getSchemaNames = (schemas) => Object.keys(schemas).filter((schemaName) => !schemaName.includes('Options'));
