import React, {useState} from 'react';
import {Text} from 'react-native';

import * as S from './styles';

const FormTransactionValue = ({getTransactionFields}) => {
  const [transactionValue, setTransactionValue] = useState(0);

  return (
    <S.Wrapper>
      <Text>Insira o valor abaixo</Text>
      <S.FieldWrapper>
        <S.ValueInput
          type={'money'}
          testID={'textInputMask'}
          value={transactionValue}
          onChangeText={(text) => {
            setTransactionValue(text);
            getTransactionFields('value', text);
          }}
        />
      </S.FieldWrapper>
    </S.Wrapper>
  );
};

export default FormTransactionValue;
