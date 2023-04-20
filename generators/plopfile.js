function plopGenerator(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('components', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'componentType',
        choices: ['context', 'form', 'structure'],
        message: 'What is the component type?',
      },
      {
        type: 'input',
        name: 'contextName',
        message: 'What is the name of the context?',
        when({ componentType }) {
          return componentType === 'context';
        },
      },
    ],
    actions(promptData) {
      const componentTypeIsContext = promptData.componentType === 'context';

      const componentContext = componentTypeIsContext
        ? '/{{kebabCase contextName}}'
        : '';

      const pathToComponentsFolder =
        '../src/common/components/{{kebabCase componentType}}';
      const pathToIntegrationTestFolder =
        '../__tests__/components/{{kebabCase contextName}}';

      const pathToComponentFile = `${pathToComponentsFolder}${componentContext}/{{pascalCase componentName}}/{{pascalCase componentName}}`;

      const pathToComponentTestFile = componentTypeIsContext
        ? `${pathToIntegrationTestFolder}/{{pascalCase componentName}}`
        : pathToComponentFile;

      return [
        {
          type: 'add',
          path: `${pathToComponentFile}.tsx`,
          templateFile: 'templates/components/component.hbs',
        },
        {
          type: 'add',
          path: `${pathToComponentFile}.module.scss`,
          templateFile: 'templates/components/component.module.scss.hbs',
        },
        {
          type: 'add',
          path: `${pathToComponentFile}.types.ts`,
          templateFile: 'templates/components/component.types.ts.hbs',
        },
        {
          type: 'add',
          path: `${pathToComponentTestFile}.spec.tsx`,
          templateFile: 'templates/components/component.spec.tsx.hbs',
        },
      ];
    },
  });

  plop.setGenerator('pages', {
    description: 'Page generator',
    prompts: [
      {
        type: 'input',
        name: 'pageName',
        message: 'What is the name of the page?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{kebabCase pageName}}/page.tsx',
        templateFile: 'templates/pages/page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/app/{{kebabCase pageName}}/{{pascalCase pageName}}.module.scss',
        templateFile: 'templates/pages/page.module.scss.hbs',
      },
      {
        type: 'add',
        path: '../cypress/e2e/{{kebabCase pageName}}.cy.ts',
        templateFile: 'templates/pages/page.cy.ts.hbs',
      },
    ],
  });
}

module.exports = plopGenerator;
