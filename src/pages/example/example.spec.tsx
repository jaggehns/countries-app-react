import { screen, waitFor } from '@testing-library/react';
import { renderWithAllProviders } from '../../testUtils/utils';
import Example from './Example';

describe('Example test suite', () => {
  it('renders example text', async () => {
    renderWithAllProviders(<Example />);
    await waitFor(() => {
      expect(
        screen.getByText('Click on the Vite and React logos to learn more')
      ).toBeInTheDocument();
    });
  });
});
