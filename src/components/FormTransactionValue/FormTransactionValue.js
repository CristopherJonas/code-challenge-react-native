import React from 'react';
import {Text} from 'react-native';

import * as S from './styles';

const FormTransactionValue = ({updateField, value}) => {
  return (
    <S.Wrapper>
      <Text>Insira o valor abaixo</Text>
      <S.FieldWrapper>
        <S.ValueInput
          type={'money'}
          testID={'textInputMask'}
          value={value}
          maxLength={16}
          onChangeText={(text) => {
            updateField(text);
          }}
        />
      </S.FieldWrapper>
      <Text>*Valor máximo de R$999.999.999,99</Text>
    </S.Wrapper>
  );
};

export default FormTransactionValue;
