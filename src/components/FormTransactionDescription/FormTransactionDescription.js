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
        value={value}
        placeholder={'descrição'}
        testID={'descriptionInput'}
      />
    </S.Wrapper>
  );
};

export default FormTransactionDescription;
