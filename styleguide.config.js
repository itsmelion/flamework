const path = require('path');
const propsParser = require('react-docgen-typescript').parse;

const { version, name: pkgName } = require('./package');

module.exports = {
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from '${pkgName}';`;
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/ThemeWrapper')
  },
  skipComponentsWithoutExample: false,
  version,
  propsParser,
  ignore: [
    '**/assets/**',
    '**/data/**',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*.styled.{js,jsx,ts,tsx}'
  ],
  // theme: {
  //   color: {
  //     sidebarBackground: '#101020',
  //     link: 'white',
  //     linkHover: 'blue'
  //   },
  // },
  // printServerInstructions(config) {
  //   console.log(`View your styleguide at: http://${config.serverHost}:${config.serverPort}`);
  // },
  sections: [
    {
      name: 'Introduction',
      content: './README.md'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.tsx',
      sectionDepth: 2
    },
  ]
};
