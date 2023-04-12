import { screen, waitFor } from '@testing-library/react';
import {
  default as user,
  default as userEvent,
} from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../../../setupTests';
import { renderWithAllProviders } from '../../testUtils/utils';
import CardView from './CardView';

describe('UI rendering test suite', () => {
  it('UI sanity check', async () => {
    renderWithAllProviders(<CardView />);
    await waitFor(() => {
      expect(screen.getByText('Countries Card View')).toBeInTheDocument();
    });
  });
  it('No countries found should be rendered on failed API call', async () => {
    server.use(
      rest.get('*/all', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      })
    );
    renderWithAllProviders(<CardView />);
    await waitFor(() => {
      expect(screen.getByText('No Countries Found')).toBeInTheDocument();
    });
  });
});

describe('Searchbar test suite', () => {
  it('If ba is typed, Barbados should be in the UI', async () => {
    renderWithAllProviders(<CardView />);
    await user.type(screen.getByPlaceholderText('Search for a country'), 'Ba');
    await waitFor(() => {
      expect(screen.getByText('Barbados')).toBeInTheDocument();
    });
  });
  it('If sia is typed, Malaysia & Indonesia should be in the UI', async () => {
    renderWithAllProviders(<CardView />);
    await user.type(screen.getByPlaceholderText('Search for a country'), 'sia');
    await waitFor(() => {
      expect(screen.getByText('Malaysia')).toBeInTheDocument();
      expect(screen.getByText('Indonesia')).toBeInTheDocument();
    });
  });
});

describe('Filter by region test suite', () => {
  it('Check that filter by region component renders correctly', async () => {
    renderWithAllProviders(<CardView />);
    //@ts-ignore
    expect(screen.getByRole('option', { name: 'All countries' }).selected).toBe(
      true
    );
    expect(screen.getAllByRole('option').length).toBe(6);
  });
});
