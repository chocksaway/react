// File: src/Routes.tsx
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import { Header } from './Header';
import { ProductsPage } from './pages/ProductsPage';
import { PostsPage } from './pages/PostsPage';
import { getPosts } from './posts/getPosts';

const router = createBrowserRouter([
    {
        path: 'posts',
        element: <PostsPage />,
        loader: getPosts, // return the fetched posts
    },
    {
        path: 'products',
        element: <ProductsPage />,
    },
    {
        path: '/',
        element: <Header />,
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
