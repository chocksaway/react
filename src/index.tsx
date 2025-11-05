import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './Routes';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);
