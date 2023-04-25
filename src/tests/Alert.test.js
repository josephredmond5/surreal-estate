import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert component', () => {
  it('should render null when no message is provided', () => {
    const { container } = render(<Alert />);
    expect(container.firstChild).toBeNull();
  });

  it('should match snapshot when success prop is true', () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );
    expect(getByText(/Success/).textContent).toBe('Success!');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when success prop is false', () => {
    const { getByText, asFragment } = render(
      <Alert message="Error!" success={false} />
    );
    expect(getByText(/Error/).textContent).toBe('Error!');
    expect(asFragment()).toMatchSnapshot();
  });
});
