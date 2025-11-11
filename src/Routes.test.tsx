// File: `src/Routes.test.tsx`
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

test('renders errorElement for /', async () => {
  const routes = [
    {
      path: '/',
      // loader throws to trigger the route error boundary
      loader: () => {
        throw new Error('test error');
      },
      errorElement: <div>Something went wrong</div>,
    },
  ];

  const router = createMemoryRouter(routes, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);

  // findByText is async because the router resolves errors asynchronously
  expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
});