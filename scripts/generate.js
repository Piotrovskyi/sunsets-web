/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const program = require('commander');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

function upper(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function createStandartComponent(compName, folderPath, compType) {
  const capName = upper(compName);

  const indexContent = [
    `import ${capName} from './${capName}.${compType}';`,
    '',
    `export default ${capName};`,
    '',
  ].join('\n');
  const componentContent = [
    `import React from 'react';`,
    `import './${capName}.styles.css';`,
    '',
    `const ${capName} = () => <div>Hello from ${capName}!</div>`,
    '',
    `export default ${capName};`,
    '',
  ].join('\n');
  const stylesContent = [].join('\n');
  const opts = {
    flag: 'w',
  };

  fs.mkdirSync(path.join(folderPath, capName));

  fs.writeFileSync(
    path.join(folderPath, capName, 'index.js'),
    indexContent,
    opts
  );
  fs.writeFileSync(
    path.join(folderPath, capName, `${capName}.${compType}.js`),
    componentContent,
    opts
  );
  fs.writeFileSync(
    path.join(folderPath, capName, `${capName}.styles.css`),
    stylesContent,
    opts
  );

  console.log(`${_.capitalize(compType)} ${capName} generated successfully`);
  console.log(`You can find it in ${path.join(folderPath, capName)}`);
  return capName;
}

program
  .command('component [name]')
  .description(
    'Generate component with given name [Example: yarn generate button]'
  )
  .action((name) => {
    createStandartComponent(name, './src/components/', 'component');
  });

program
  .command('page [path]')
  .description(
    'Generate page with given name [Example: yarn generate subfolder/some-page-name]'
  )
  .action((name) => {
    const splitedPath = name.split('/').filter((el) => el);
    const fileName = splitedPath.pop();
    const camelName = _.camelCase(fileName);
    createStandartComponent(camelName, './src/pages', 'page');
  });

program.parse(process.argv);
