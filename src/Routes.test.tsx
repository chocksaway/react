// typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from './Routes';

test('redirects_from_root_to_header', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>
  );

  expect(await screen.findByText(/Header route content/i)).toBeInTheDocument();
});