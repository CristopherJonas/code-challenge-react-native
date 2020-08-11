import React from 'react';
import '@testing-library/jest-native';
import {render, waitFor} from '@testing-library/react-native';
import FormTransactionValue from './FormTransactionValue';

describe('New Transaction screen -> input Transaction value', () => {
  test('transaction value must be initialized with value = 0', async () => {
    const {getByTestId} = render(
      <FormTransactionValue updateField={jest.fn((x) => x)} value={0} />,
    );

    await waitFor(() =>
      expect(getByTestId('textInputMask').props.value).toBe('R$0,00'),
    );
  });

  test('transaction value must be updated with mask (input -> 123456) (output -> R$1234,56)', async () => {
    const {getByTestId} = render(
      <FormTransactionValue updateField={jest.fn((x) => x)} value={1234.56} />,
    );

    await waitFor(() =>
      expect(getByTestId('textInputMask').props.value).toBe('R$1.234,56'),
    );
  });

  test('transaction value must be max 999.999.999,99', async () => {
    const {getByTestId} = render(
      <FormTransactionValue
        updateField={jest.fn((x) => x)}
        value={999999999.99}
      />,
    );

    await waitFor(() =>
      expect(getByTestId('textInputMask').props.maxLength).toBe(16),
    );
  });
});
