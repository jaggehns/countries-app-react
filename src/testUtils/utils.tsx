import { rest } from 'msw';
// import { BrowserRouter, MemoryRouter } from 'react-router-dom'

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
