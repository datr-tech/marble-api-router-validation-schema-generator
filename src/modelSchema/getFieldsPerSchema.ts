export const getFieldsPerSchema = (schemaName, schemas) => {
  const schema = schemas[schemaName];
  const fields = Object.keys(schema);

  return {
    schemaName,
    fields,
  };
};
