// File: src/Routes.tsx
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';

import { Header } from './Header';
import { ProductsPage } from './pages/ProductsPage';
import { PostsPage } from './pages/PostsPage';
import { getPosts } from './posts/getPosts';

const router = createBrowserRouter([
    {
        path: 'posts',
        element: <PostsPage />,
        loader: getPosts,
        errorElement: <div>Failed to load posts</div>,
    },
    {
        path: 'products',
        element: <ProductsPage />,
        errorElement: <div>Failed to load products</div>,
    },
    {
        path: 'header',
        element: <Header />,
        errorElement: <div>header - Something went wrong</div>,
    },
    // redirect root "/" to "/header"
    {
        path: '/',
        element: <Navigate to="/header" replace />,
        errorElement: <div>/ - something went wrong</div>,
    },
    // catch-all 404
    {
        path: '*',
        element: <div>404 - Page not found</div>,
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}