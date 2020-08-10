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
          onChangeText={(text) => {
            updateField(text);
          }}
        />
      </S.FieldWrapper>
    </S.Wrapper>
  );
};

export default FormTransactionValue;
