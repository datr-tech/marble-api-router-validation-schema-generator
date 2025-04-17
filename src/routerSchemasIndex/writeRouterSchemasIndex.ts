import fs from 'node:fs';
import path from 'node:path';
import Handlebars from 'handlebars';
import { deriveRouterSchemasIndexPath } from './deriveRouterSchemasIndexPath';
import { deriveRouterSchemasIndexTemplateName } from './deriveRouterSchemasIndexTemplateName';
import { hasRouterSchemasIndex } from './hasRouterSchemasIndex';
import { removeRouterSchemasIndex } from './removeRouterSchemasIndex';

export const writeRouterSchemasIndex = ({ routerSchemaMethodNames, routerSchemasDirPath }) => {
  const routerSchemasIndexPath = deriveRouterSchemasIndexPath(routerSchemasDirPath);

  if (hasRouterSchemasIndex(routerSchemasIndexPath)) {
    removeRouterSchemasIndex(routerSchemasIndexPath);
  }

  const templateName = deriveRouterSchemasIndexTemplateName();
  const templatePath = path.resolve(`./src/templates/${templateName}.hbs`);
  const templateStr = fs.readFileSync(templatePath, { encoding: 'utf8', flag: 'r' });
  const templateFn = Handlebars.compile(templateStr, { noEscape: true, preventIndent: true, ignoreStandalone: true });
  const content = templateFn({ routerSchemaMethodNames });

  fs.writeFileSync(routerSchemasIndexPath, content, 'utf8');

  return routerSchemasIndexPath;
};
