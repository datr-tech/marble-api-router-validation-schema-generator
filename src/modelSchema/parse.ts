import { routerMethods } from '@app-marvsg/config';
import { getAcceptedFieldsPerSchemas } from './getAcceptedFieldsPerSchemas';
import { getFieldsPerSchemas } from './getFieldsPerSchemas';
import { getSchemaNames } from './getSchemaNames';
import { parseAcceptedField } from './parseAcceptedField';

export const parse = (schemas) => {
  const schemaNames = getSchemaNames(schemas);
  const fieldsPerSchemas = getFieldsPerSchemas(schemaNames, schemas);
  const acceptedFieldsPerSchemas = getAcceptedFieldsPerSchemas(schemaNames, fieldsPerSchemas, routerMethods);

  let parsedFieldsPerRouterMethod = {};
  let parsedFieldsPerSchema = {};
  const parsedFields = {};

  acceptedFieldsPerSchemas.forEach((acceptedFieldsPerSchema) => {
    const { acceptedFields, schemaName } = acceptedFieldsPerSchema;
    const schema = schemas[schemaName];

    Object.keys(acceptedFields).forEach((routerMethod) => {
      const acceptedFieldsPerMethod = acceptedFields[routerMethod];
      const isCreate = routerMethod == 'Create';

      acceptedFieldsPerMethod.forEach((acceptedFieldPerMethod) => {
        const parsedField = parseAcceptedField(acceptedFieldPerMethod, schema, isCreate);
        parsedFieldsPerRouterMethod = Object.assign(parsedFieldsPerRouterMethod, parsedField);
      });

      parsedFieldsPerSchema[routerMethod] = parsedFieldsPerRouterMethod;
      parsedFieldsPerRouterMethod = {};
    });

    parsedFields[schemaName] = parsedFieldsPerSchema;
    parsedFieldsPerSchema = {};
  });

  return parsedFields;
};
