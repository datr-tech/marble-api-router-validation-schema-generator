export const filterSchemaFieldsByRouterMethod = (schemaFields, routerMethod) => {
  let filteredFields = [];

  switch (routerMethod) {
    case 'Create':
      filteredFields = schemaFields.filter(
        (schemaField) => schemaField != '_id' && schemaField != 'createdAt' && schemaField != 'updatedAt',
      );
      break;

    case 'Update':
      filteredFields = schemaFields.filter((schemaField) => schemaField != 'createdAt' && schemaField != 'updatedAt');
      break;

    default:
      filteredFields = ['_id'];
      break;
  }

  return filteredFields;
};
