import { filterSchemaFieldsByRouterMethod } from './filterSchemaFieldsByRouterMethod';

export const getAcceptedFieldsPerSchema = (fieldsPerSchema, routerMethods) => {
  const { fields } = fieldsPerSchema;
  fieldsPerSchema['acceptedFields'] = {};

  routerMethods.forEach((routerMethod) => {
    fieldsPerSchema.acceptedFields[routerMethod] = filterSchemaFieldsByRouterMethod(fields, routerMethod);
  });

  return fieldsPerSchema;
};
