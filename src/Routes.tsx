import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import { Header } from './Header';

import { ProductsPage } from './pages/ProductsPage';

const router = createBrowserRouter([
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