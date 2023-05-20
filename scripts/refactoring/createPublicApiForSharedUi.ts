import { Project } from 'ts-morph';
import path from 'path';
import * as fs from 'fs';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const pathUI = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(pathUI);
const componentsDirectories = sharedUIDirectory?.getDirectories();

function isAbsolute(value: string): boolean {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];

    return layers.some((layer) => value.startsWith(layer));
}

componentsDirectories?.forEach((directory) => {
    const directoryPath = directory.getPath();
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    fs.readdir(directoryPath, { withFileTypes: true }, (error, files) => {
        if (error) throw error;
        const directoriesInDirectory = files
            .filter((item) => item.isDirectory())
            .map((item) => item.name);

        const UIDirectoryNumber = directoriesInDirectory.indexOf('ui');

        if (!indexFile) {
            let sourceCode = `export * from './${directory.getBaseName()}';`;

            if (directoriesInDirectory[UIDirectoryNumber]) {
                sourceCode = `export * from './ui/${directory.getBaseName()}';`;
            }

            const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

            file.save();
        }
    });
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((declaration) => {
        const value = declaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUISlice = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUISlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            declaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
