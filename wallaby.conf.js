const build = require('@dolittle/typescript.build');

module.exports = build.wallaby((wallaby, settings) => {
    settings.compilers = {
        '**/*.js': wallaby.compilers.babel(),
        '**/*.@(js|ts)': wallaby.compilers.typeScript({
            module: 'commonjs',
            downlevelIteration: true,
            allowJs: true,
            experimentalDecorators: true,
            esModuleInterop: true,
            target: 'es6'
        })
    }
});