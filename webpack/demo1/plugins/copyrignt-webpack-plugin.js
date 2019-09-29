class CopyrightWebpackPlugin {
    constructor() {
        
    }
    apply(compiler) {
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('compile')
        })
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright by xx'
                },
                size: function() {
                    return 15;
                }
            };
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;