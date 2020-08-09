import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import FormToggleTransactionType from './FormToggleTransactionType';

describe('New Transaction screen -> toggle Transaction type', () => {
  test('transaction type must be initialized as DECREMENT and its text background color must be red(#d94343) and INCREMENT text background color must be gray(#ccc)', async () => {
    const {getByTestId} = render(<FormToggleTransactionType />);

    await waitFor(
      () =>
        expect(getByTestId('incrementText')).toHaveStyle({
          color: '#ccc',
        }),
      expect(getByTestId('decrementText')).toHaveStyle({
        color: '#d94343',
      }),
    );
  });

  // Bug in Switch test
  // https://github.com/callstack/react-native-testing-library/issues/329

  // test('When click on toggle button, INCREMENT text background color must be blue(#436bd9) ans DECREMENT text background color must be gray(#ccc)', async () => {
  //   const {getByTestId} = render(<FormToggleTransactionType />);

  //   const toggleButton = getByTestId('toggleButton');
  //   fireEvent(toggleButton, 'onValueChange');

  //   await waitFor(() =>
  //     expect(getByTestId('incrementText')).toHaveStyle({
  //       color: '#436bd9',
  //     }),
  //   );
  // });
});
