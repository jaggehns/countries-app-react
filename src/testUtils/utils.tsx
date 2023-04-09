import { render } from '@testing-library/react';
import { rest } from 'msw';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

//So jest knows that this file is a valid module
export {};

export const handlers = [
  rest.get('*/test', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'test',
      })
    );
  }),
];

export function renderWithAllProviders(ui: React.ReactElement) {
  const { rerender, ...result } = render(<BrowserRouter>{ui}</BrowserRouter>);
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(<BrowserRouter>{rerenderUi}</BrowserRouter>),
  };
}
export function renderWithMemoryRouter(
  ui: React.ReactElement,
  route: string[]
) {
  const { rerender, ...result } = render(
    <MemoryRouter initialEntries={route}>{ui}</MemoryRouter>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <MemoryRouter initialEntries={route}>{rerenderUi}</MemoryRouter>
      ),
  };
}
