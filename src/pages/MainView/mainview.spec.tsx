import { screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../../../setupTests';
import { renderWithAllProviders } from '../../testUtils/utils';
import MainView from './MainView';

describe('UI rendering test suite', () => {
  it('UI sanity check', async () => {
    renderWithAllProviders(<MainView />);
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
    renderWithAllProviders(<MainView />);
    await waitFor(() => {
      expect(screen.getByText('No Countries Found')).toBeInTheDocument();
    });
  });
});

describe('Searchbar test suite', () => {
  it('If ba is typed, Barbados should be in the UI', async () => {
    renderWithAllProviders(<MainView />);
    await user.type(screen.getByPlaceholderText('Search for a country'), 'Ba');
    await waitFor(() => {
      expect(screen.getByText('Barbados')).toBeInTheDocument();
    });
  });
  it('If sia is typed, Malaysia & Indonesia should be in the UI', async () => {
    renderWithAllProviders(<MainView />);
    await user.type(screen.getByPlaceholderText('Search for a country'), 'sia');
    await waitFor(() => {
      expect(screen.getByText('Malaysia')).toBeInTheDocument();
      expect(screen.getByText('Indonesia')).toBeInTheDocument();
    });
  });
});

describe('Filter by region test suite', () => {
  it('Check that filter by region component renders correctly', async () => {
    renderWithAllProviders(<MainView />);
    //@ts-ignore
    expect(screen.getByRole('option', { name: 'All countries' }).selected).toBe(
      true
    );
    expect(screen.getAllByRole('option').length).toBe(6);
  });

  describe('Filter by region test suite', () => {
    it('When Asia is selected, Malaysia, HK & Kuwait should be in the UI', async () => {
      renderWithAllProviders(<MainView />);

      const dropdown = screen.getByTestId('select-component');
      const option = screen.getByRole('option', { name: 'Asia' });

      user.selectOptions(dropdown, option);

      await waitFor(() => {
        expect(screen.getByText('Malaysia')).toBeInTheDocument();
        expect(screen.getByText('Hong Kong')).toBeInTheDocument();
        expect(screen.getByText('Kuwait')).toBeInTheDocument();
      });
    });

    it('When Europe is selected, Frace, Denmark & Netherlands should be in the UI', async () => {
      renderWithAllProviders(<MainView />);

      const dropdown = screen.getByTestId('select-component');
      const option = screen.getByRole('option', { name: 'Europe' });

      user.selectOptions(dropdown, option);

      await waitFor(() => {
        expect(screen.getByText('France')).toBeInTheDocument();
        expect(screen.getByText('Denmark')).toBeInTheDocument();
        expect(screen.getByText('Netherlands')).toBeInTheDocument();
      });
    });

    it('When Africa is selected, Egypt, Togo & Seychelles should be in the UI', async () => {
      renderWithAllProviders(<MainView />);

      const dropdown = screen.getByTestId('select-component');
      const option = screen.getByRole('option', { name: 'Africa' });

      user.selectOptions(dropdown, option);

      await waitFor(() => {
        expect(screen.getByText('Egypt')).toBeInTheDocument();
        expect(screen.getByText('Togo')).toBeInTheDocument();
        expect(screen.getByText('Seychelles')).toBeInTheDocument();
      });
    });

    it('When Americas is selected, Peru, Cuba & Costa Rica should be in the UI', async () => {
      renderWithAllProviders(<MainView />);

      const dropdown = screen.getByTestId('select-component');
      const option = screen.getByRole('option', { name: 'Americas' });

      user.selectOptions(dropdown, option);

      await waitFor(() => {
        expect(screen.getByText('Peru')).toBeInTheDocument();
        expect(screen.getByText('Cuba')).toBeInTheDocument();
        expect(screen.getByText('Costa Rica')).toBeInTheDocument();
      });
    });

    it('When Oceania is selected, Australia, Fiji & Samoa should be in the UI', async () => {
      renderWithAllProviders(<MainView />);

      const dropdown = screen.getByTestId('select-component');
      const option = screen.getByRole('option', { name: 'Oceania' });

      user.selectOptions(dropdown, option);

      await waitFor(() => {
        expect(screen.getByText('Australia')).toBeInTheDocument();
        expect(screen.getByText('Samoa')).toBeInTheDocument();
        expect(screen.getByText('Fiji')).toBeInTheDocument();
      });
    });
  });
});

describe('Switch test suite', () => {
  it('Check that switch renders correctly', async () => {
    renderWithAllProviders(<MainView />);
    const switchComponent = screen.getByTestId('switch-component');
    expect(switchComponent).toBeInTheDocument();
  });

  it('Check that clicking on the switch should render the table component', async () => {
    renderWithAllProviders(<MainView />);
    const switchComponent = screen.getByTestId('switch-component');
    expect(switchComponent).toBeInTheDocument();
    expect(screen.queryByText('Table')).not.toBeInTheDocument();
    user.click(switchComponent);
    await waitFor(() => {
      expect(screen.getByText('Table')).toBeInTheDocument();
      expect(screen.getByText('Currency')).toBeInTheDocument();
    });
  });
});
