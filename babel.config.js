

module.exports = function () {
    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [

            ["@babel/plugin-transform-runtime",
                {
                    corejs: 2
                }
            ],
            "react-hot-loader/babel",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-json-strings",
            [
                "@babel/plugin-proposal-decorators",
                {
                    legacy: true
                }
            ],
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-throw-expressions",
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-logical-assignment-operators",
            "@babel/plugin-proposal-optional-chaining",
            [
                "@babel/plugin-proposal-pipeline-operator",
                {
                    proposal: "minimal"
                }
            ],
            "@babel/plugin-proposal-nullish-coalescing-operator",
            "@babel/plugin-proposal-do-expressions",
            "@babel/plugin-proposal-function-bind"
        ]
    };
};
