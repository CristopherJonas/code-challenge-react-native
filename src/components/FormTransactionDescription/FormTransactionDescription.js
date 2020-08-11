import React from 'react';
import {Text} from 'react-native';

import * as S from './styles';

const FormTransactionDescription = ({updateField, value}) => {
  return (
    <S.Wrapper>
      <Text>Insira a descrição abaixo</Text>
      <S.DescriptionInput
        onChangeText={(text) => {
          updateField(text);
        }}
        maxLength={50}
        value={value}
        placeholder={'descrição'}
        testID={'descriptionInput'}
      />
      <Text>*Máximo de 50 caracteres</Text>
    </S.Wrapper>
  );
};

export default FormTransactionDescription;
