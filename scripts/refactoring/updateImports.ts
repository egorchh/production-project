import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const layerSrc = ['@/shared/ui'];

function isAbsolute(value: string): boolean {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];

    return layers.some((layer) => value.startsWith(layer));
}

function isAbsoluteSrc(value: string) {
    return layerSrc.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((declaration) => {
        const value = declaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            declaration.setModuleSpecifier(`@/${value}`);
        }

        if (isAbsoluteSrc(value)) {
            const segments = value.split('/');
            const componentName = segments.slice(-1);
            const commonPath = segments.slice(0, segments.length - 1);
            const newPath = [...commonPath, 'deprecated', ...componentName].join('/');
            declaration.setModuleSpecifier(newPath);
        }
    });
});

project.save();
