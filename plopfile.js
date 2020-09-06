const validateEmptyValue = (value, errorMessage) => {
    if (/.+/.test(value)) {
        return true;
    }

    return errorMessage;
};

module.exports = function (plop) {
    plop.addHelper('upperCase', function (text) {
        return text.toUpperCase();
    });

    const files = {
        atom: 'plop-templates/atom.js',
        styled: 'plop-templates/styled.js',
    };

    const createAtom = {
        type: 'add',
        path: 'src/components/atoms/{{pascalCase name}}.tsx',
        templateFile: files.atom,
    };

    const createStyledComponent = {
        type: 'add',
        path: 'src/components/atoms/{{pascalCase name}}.tsx',
        templateFile: files.styled,
    };

    const getComponentName = {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
        validate: (value) => validateEmptyValue(value, 'name is required'),
    };

    const getStyledElement = {
        type: 'input',
        name: 'element',
        message: 'What is the type of element?',
        validate: (value) => validateEmptyValue(value, 'element is required'),
    };

    plop.setGenerator('atom', {
        description: 'Atom',
        prompts: [getComponentName],
        actions: [createAtom],
    });

    plop.setGenerator('styled', {
        description: 'Styled Component',
        prompts: [getComponentName, getStyledElement],
        actions: [createStyledComponent],
    });
};
