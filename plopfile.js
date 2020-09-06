module.exports = function (plop) {
    plop.addHelper('upperCase', function (text) {
        return text.toUpperCase();
    });

    const files = {
        atom: 'plop-templates/atom.js',
    };

    const createAtom = {
        type: 'add',
        path: 'src/components/atoms/{{pascalCase name}}.tsx',
        templateFile: files.atom,
    };

    const getComponentName = {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
        validate: function (value) {
            if (/.+/.test(value)) {
                return true;
            }

            return 'name is required';
        },
    };

    plop.setGenerator('atom', {
        description: 'Atom',
        prompts: [getComponentName],
        actions: [createAtom],
    });
};
