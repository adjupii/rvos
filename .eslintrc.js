module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "version": "16"
        }
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 }
        ],
        "no-multi-spaces": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": [ "const", "let", "var" ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": [ "const", "let", "var" ],
                "next": [ "const", "let", "var" ]
            },
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "react/jsx-wrap-multilines": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/self-closing-comp": ["error", {
          "component": true,
          "html": false
        }],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-tag-spacing": "error",
        "react/prefer-stateless-function": "error",
        "react/jsx-child-element-spacing": "error",
        "react/jsx-max-props-per-line": "error",
        "react/display-name": 0,
        "no-console": 1,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
    }
};