export const parseAcceptedField = (acceptedFieldName, schema, isCreate) => {
  const acceptedFieldDef = schema[acceptedFieldName];
  let parsedFieldDef;

  switch (acceptedFieldName) {
    case '_id':
      parsedFieldDef = {
        [acceptedFieldDef.alias]: {
          in: 'params',
          isMongoId: true,
          notEmpty: true,
        },
      };
      break;

    case 'adminStatusId':
      parsedFieldDef = {
        adminStatusId: {
          default: 'undefined',
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          optional: {
            values: 'undefined',
          },
        },
      };
      break;

    case 'description':
      parsedFieldDef = {
        description: {
          default: 'undefined',
          in: 'body',
          isString: true,
          isLength: {
            options: {
              min: 1,
              max: 200,
            },
          },
          notEmpty: false,
          optional: {
            values: 'undefined',
          },
        },
      };
      break;

    case 'name':
      parsedFieldDef = {
        name: {
          in: 'body',
          isString: true,
          isLength: {
            options: {
              min: 8,
              max: 100,
            },
          },
          notEmpty: true,
        },
      };

      if (!isCreate) {
        parsedFieldDef['name'].default = 'undefined';
        parsedFieldDef['name'].notEmpty = false;
        parsedFieldDef['name'].optional = { values: 'undefined' };
      }
      break;

    case 'order':
      parsedFieldDef = {
        order: {
          default: 0,
          in: 'body',
          isInt: true,
          notEmpty: false,
          optional: {
            values: 'undefined',
          },
        },
      };
      break;

    case 'password':
      parsedFieldDef = {
        password: {
          in: 'body',
          isString: true,
          isLength: {
            options: {
              min: 8,
              max: 20,
            },
          },
          notEmpty: true,
        },
      };

      if (!isCreate) {
        parsedFieldDef['password'].default = 'undefined';
        parsedFieldDef['password'].notEmpty = false;
        parsedFieldDef['password'].optional = { values: 'undefined' };
      }
      break;

    case 'username':
      parsedFieldDef = {
        username: {
          in: 'body',
          isString: true,
          isLength: {
            options: {
              min: 8,
              max: 20,
            },
          },
          notEmpty: true,
        },
      };

      if (!isCreate) {
        parsedFieldDef['username'].default = 'undefined';
        parsedFieldDef['username'].notEmpty = false;
        parsedFieldDef['username'].optional = { values: 'undefined' };
      }
      break;

    default:
      if (acceptedFieldDef['type'] == 'ObjectId') {
        parsedFieldDef = {
          [acceptedFieldName]: {
            in: 'body',
            isMongoId: true,
            notEmpty: false,
          },
        };

        if (!isCreate) {
          parsedFieldDef[acceptedFieldName].default = 'undefined';
          parsedFieldDef[acceptedFieldName].notEmpty = false;
          parsedFieldDef[acceptedFieldName].optional = { values: 'undefined' };
        }
        break;
      }
  }

  return parsedFieldDef;
};
