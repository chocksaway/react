// typescript
import * as React from 'react';
import { render, screen } from '@testing-library/react';

// Mock Header before importing ErrorBoundary so the mock is used when ErrorBoundary renders
jest.mock(`./Header`, () => ({
    Header: () => <div data-testid="header">header</div>,
}));

import { ErrorBoundary } from `./ErrorBoundary`;

function Thrower(): JSX.Element {
    throw new Error('boom');
}

describe('ErrorBoundary', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    afterAll(() => {
        consoleErrorSpy.mockRestore();
    });

    test('renders Header when a child throws during render', () => {
        render(
            <ErrorBoundary>
                <Thrower />
            </ErrorBoundary>
        );

        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
});