import { getFieldsPerSchema } from './getFieldsPerSchema';

export const getFieldsPerSchemas = (schemaNames, schemas) => schemaNames.map((schemaName) => getFieldsPerSchema(schemaName, schemas));
