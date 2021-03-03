module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    settings: {
        'html/html-extensions': ['.html', '.mpx'],  // consider .html and .mpx files as HTML
    },
    plugins: [
        'html'
    ],
    globals: {
        wx: true,
        getApp: true,
        App: true,
        getCurrentPages: true,
        __mpx_mode__: true
    },
    rules: {
        'indent': [
            'error',
            4,
            { 'SwitchCase': 1 }
        ],
        camelcase: ['error', { 'allow': ['__mpx_mode__'] }]
    },
}
