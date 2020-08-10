import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import FormTransactionValue from './FormTransactionValue';

describe('New Transaction screen -> input Transaction value', () => {
  test('transaction value must be initialized with value = 0', async () => {
    const {getByTestId} = render(
      <FormTransactionValue getTransactionFields={jest.fn((x) => x)} />,
    );

    await waitFor(() =>
      expect(getByTestId('textInputMask').props.value).toBe('R$0,00'),
    );
  });

  test('transaction value must be updated with mask (input -> 123456) (output -> R$1234,56)', async () => {
    const {getByTestId} = render(
      <FormTransactionValue getTransactionFields={jest.fn((x) => x)} />,
    );

    fireEvent.changeText(getByTestId('textInputMask'), '123456');
    await waitFor(() =>
      expect(getByTestId('textInputMask').props.value).toBe('R$1.234,56'),
    );
  });
});
