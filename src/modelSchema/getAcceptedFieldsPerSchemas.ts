import { getAcceptedFieldsPerSchema } from './getAcceptedFieldsPerSchema';

export const getAcceptedFieldsPerSchemas = (schemaNames, fieldsPerSchemas, routerMethods) => {
  return schemaNames.map((schemaName) => {
    const fieldsPerSchema = fieldsPerSchemas.find((fieldsPerSchema) => fieldsPerSchema.schemaName == schemaName);
    const acceptedFieldsPerSchema = getAcceptedFieldsPerSchema(fieldsPerSchema, routerMethods);

    return acceptedFieldsPerSchema;
  });
};
