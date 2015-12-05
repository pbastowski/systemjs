Package.describe({
    name:          'pbastowski:systemjs',
    version:       '0.0.2',
    summary:       'SystemJS for Meteor 1.2',
    git:           'https://github.com/pbastowski/systemjs.git',
    documentation: 'README.md'
});

Npm.depends({
   'systemjs': '0.19.6'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.1');

    api.addFiles([
        'require.js',
    ], ['server'], { transpile: false} );

    api.addFiles([
        '.npm/package/node_modules/systemjs/dist/system-polyfills.js',
        '.npm/package/node_modules/systemjs/dist/system.js',
    ], ['client', 'server'], { transpile: false} );

});

