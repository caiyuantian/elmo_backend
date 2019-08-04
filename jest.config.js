module.exports = {
    "collectCoverage": true,
    "testEnvironment": "node",
    "moduleFileExtensions": [
        "js",
        "ts",
        "tsx"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": [
        "<rootDir>/test/*.ts"
    ]
}