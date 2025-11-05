// File: src/Routes.tsx
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Navigate,
} from 'react-router-dom';

import { Header } from './Header';
import { ProductsPage } from './pages/ProductsPage';
import { PostsPage } from './pages/PostsPage';
import { getPosts } from './posts/getPosts';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <div className="p-5">Welcome — pick a page from the header.</div>,
            },
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
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    }
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
