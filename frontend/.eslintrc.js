module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": true,

    },
    "rules": {
        "react/display-name": [
            "enable", 
            { "ignoreTranspilerName": true }
        ],
        "import/no-unresolved":[
            "disable"
        ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1},
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};