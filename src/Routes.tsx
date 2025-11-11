import React from 'react';
import {
    BrowserRouter,
    Routes as RouterRoutes,
    Route,
    Navigate,
    Outlet,
} from 'react-router-dom';

import { Header } from './Header';
import { ProductsPage } from './pages/ProductsPage';
import { PostsPage } from './pages/PostsPage';
import { ErrorBoundary } from './ErrorBoundary';

function HeaderOnly(): JSX.Element {
    return <div className="p-5">Header route content (header already rendered by layout)</div>;
}

function Layout(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

function withErrorBoundary(element: JSX.Element): JSX.Element {
    return <ErrorBoundary>{element}</ErrorBoundary>;
}

export function Routes(): JSX.Element {
    return (
        <RouterRoutes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="/header" replace />} />

                <Route path="header" element={withErrorBoundary(<HeaderOnly />)} />

                <Route path="posts" element={withErrorBoundary(<PostsPage />)} />
                <Route path="products" element={withErrorBoundary(<ProductsPage />)} />
            </Route>
        </RouterRoutes>
    );
}