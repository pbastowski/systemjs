Package.describe({
    name:          'pbastowski:systemjs',
    version:       '0.0.1',
    summary:       'SystemJS for Meteor 1.2',
    git:           'https://github.com/pbastowski/systemjs.git',
    documentation: 'README.md'
});

Npm.depends({
   'systemjs': '0.19.5'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.addFiles([
        '.npm/package/node_modules/systemjs/dist/system.js',
        '.npm/package/node_modules/systemjs/dist/system-polyfills.js',
    ], ['client'], { transpile: false} );
});

