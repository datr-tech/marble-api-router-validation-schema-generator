import { logger } from "@freight/common-logger";
import { modelSchema } from './modelSchema';
import { modelSchemasPerService } from './modelSchemas';
import { routerSchemasIndex } from './routerSchemasIndex';
import { routerService } from './routerService';

const routerSchemasPerService = modelSchemasPerService.map(({ modelSchemas, service }) => {
  return {
    schemas: modelSchema.parse(modelSchemas),
    service,
  };
});

const routerSchemaMethodsDefPerService = routerSchemasPerService.map((routerSchemasPerSingleService) => {
  return routerService.write(routerSchemasPerSingleService);
});

const routerSchemasIndexPaths = routerSchemaMethodsDefPerService.map((routerSchemaMethodsDef) => {
  return routerSchemasIndex.write(routerSchemaMethodsDef);
});

logger.log({ routerSchemasIndexPaths });
