import * as dolomiteSchemas from '@freight/dolomite-model-schemas';
import * as entitySchemas from '@freight/entity-model-schemas';
import * as freightSchemas from '@freight/freight-model-schemas';
import * as granul8Schemas from '@freight/granul8-model-schemas';
import * as personaSchemas from '@freight/persona-model-schemas';
import * as procSchemas from '@freight/proc-model-schemas';

export const modelSchemasPerService = [
  {
    modelSchemas: dolomiteSchemas,
    service: 'dolomite',
  },
  {
    modelSchemas: entitySchemas,
    service: 'entity',
  },
  {
    modelSchemas: freightSchemas,
    service: 'freight',
  },
  {
    modelSchemas: granul8Schemas,
    service: 'granul8',
  },
  {
    modelSchemas: personaSchemas,
    service: 'persona',
  },
  {
    modelSchemas: procSchemas,
    service: 'proc',
  },
];
