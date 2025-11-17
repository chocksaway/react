// File: `src/Routes.test.tsx`
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

test('renders errorElement for /', async () => {
  const routes = [
    {
      path: '/',
      // provide a placeholder element so the route is a valid leaf route
      element: <div />,
      // loader throws to trigger the route error boundary
      loader: () => {
        throw new Error('test error');
      },
      errorElement: <div>Something went wrong</div>,
    },
  ];

  const router = createMemoryRouter(routes, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);

  expect(await screen.findByText('xxxxxxxSomething went wrong')).toBeInTheDocument();
});