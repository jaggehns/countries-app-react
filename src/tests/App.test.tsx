import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('App test suite', () => {
  it('renders a heading', async () => {
    render(<App />);
    await waitFor(() => {
      expect(
        screen.getByText('Click on the Vite and React logos to learn more')
      ).toBeInTheDocument();
    });
  });
});
