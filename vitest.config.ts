import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // Specify the environment in which tests will run
        environment: 'jsdom', // Use 'node' for backend tests

        // Enable for coverage reports
        coverage: {
            reporter: ['text', 'json', 'html'],
            reportsDirectory: './coverage',
        },

        // Specify test files to include
        include: [
            'src/**/*.test.ts',
            'src/**/*.test.tsx',
            'src/__tests_/**/*.ts',
            'src/__tests__/**/*.tsx'
        ],

        // Allow global setup for testing
        globals: true,

        // Setup files to run before tests
        setupFiles: 'src/setupTests.ts',

        // Specify the timeout for each test
        testTimeout: 5000,
    },
});
