import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';

import * as S from './styles';

const FormTransactionDescription = ({getTransactionFields}) => {
  const [transactionDescription, setTransactionDescription] = useState('');

  return (
    <S.Wrapper>
      <Text>Insira a descrição abaixo</Text>
      <S.DescriptionInput
        onChangeText={(text) => {
          setTransactionDescription(text);
          getTransactionFields('description', text);
        }}
        value={transactionDescription}
        placeholder={'descrição'}
      />
    </S.Wrapper>
  );
};

export default FormTransactionDescription;
