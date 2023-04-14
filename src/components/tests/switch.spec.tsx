import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from '../Switch';

describe('Switch', () => {
  const defaultProps = {
    onChange: jest.fn(),
    isChecked: false,
    darkMode: false,
  };

  it('should render the component', () => {
    const { getByTestId } = render(<Switch {...defaultProps} />);
    expect(getByTestId('switch-component')).toBeInTheDocument();
  });

  it('should toggle the switch when clicked', () => {
    const { getByTestId } = render(<Switch {...defaultProps} />);
    const switchComponent = getByTestId('switch-component');

    expect(defaultProps.onChange).not.toHaveBeenCalled();

    fireEvent.click(switchComponent);

    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('should display the card view label when the switch is checked', () => {
    const { getByText } = render(<Switch {...defaultProps} isChecked={true} />);
    const cardViewLabel = getByText('Card');
    expect(cardViewLabel).toBeInTheDocument();
  });

  it('should display the table view label when the switch is not checked', () => {
    const { getByText } = render(
      <Switch {...defaultProps} isChecked={false} />
    );
    const tableViewLabel = getByText('Table');
    expect(tableViewLabel).toBeInTheDocument();
  });

  it('should display the label prop', () => {
    const { getByText } = render(
      <Switch {...defaultProps} label="Test label" />
    );
    const label = getByText('Test label');
    expect(label).toBeInTheDocument();
  });
});
