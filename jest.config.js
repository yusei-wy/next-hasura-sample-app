module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '.tsx?$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
    // Setup Enzyme
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
};
