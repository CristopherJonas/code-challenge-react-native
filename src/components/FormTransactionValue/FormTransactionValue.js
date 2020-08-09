import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import * as S from './styles';

const FormTransactionValue = () => {
  const [transactionValue, setTransactionValue] = useState(0);

  return (
    <>
      <Text>Insira o valor abaixo</Text>
      <S.wrapper>
        <TextInputMask
          type={'money'}
          style={{fontWeight: 'bold', fontSize: 20}}
          testID={'textInputMask'}
          value={transactionValue}
          onChangeText={(text) => setTransactionValue(text)}
          // add the ref to a local var
          ref={(ref) => (this.moneyField = ref)}
        />
      </S.wrapper>
    </>
  );
};

export default FormTransactionValue;
