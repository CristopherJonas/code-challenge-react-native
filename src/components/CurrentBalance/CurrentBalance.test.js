import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import CurrentBalance from './CurrentBalance';

describe('Home Screen CurrentBalance', () => {
  test('clicking in slashed eye, the balance is hiden', async () => {
    const {getByTestId, queryByTestId} = render(
      <CurrentBalance balance={19.9} />,
    );

    const buttonIcon = getByTestId('eyeButton');
    fireEvent.press(buttonIcon);

    await waitFor(() =>
      expect(queryByTestId('balanceValue').props.children).toBe('######'),
    );
  });

  test('clicking in open eye, the balance is shown', async () => {
    const {getByTestId, queryByTestId} = render(
      <CurrentBalance balance={19.9} />,
    );

    const buttonIcon = getByTestId('eyeButton');
    fireEvent.press(buttonIcon);
    fireEvent.press(buttonIcon);

    await waitFor(() =>
      expect(queryByTestId('balanceValue').props.children).toBe('R$19,90'),
    );
  });
});
