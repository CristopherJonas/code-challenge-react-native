import React, {useState, useContext} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import FormToggleTransactionType from '../../components/FormToggleTransactionType/FormToggleTransactionType';
import FormTransactionDescription from '../../components/FormTransactionDescription/FormTransactionDescription';
import FormTransactionValue from '../../components/FormTransactionValue/FormTransactionValue';
import {TransactionContext} from '../../Context';
import {MaskService} from 'react-native-masked-text';

import * as S from './styles';

const NewTransaction = () => {
  const [newTransaction, setNewTransaction] = useState({
    type: '',
    value: 0,
    description: '',
  });
  const {updateTransactions} = useContext(TransactionContext);

  const saveNewTransaction = () => {
    updateTransactions(newTransaction);
  };

  const getTransactionFields = (key, value) => {
    const auxTrans = newTransaction;
    switch (key) {
      case 'type':
        auxTrans.type = value;
        break;
      case 'value':
        auxTrans.value = MaskService.toRawValue('money', value);
        break;
      case 'description':
        auxTrans.description = value;
        break;

      default:
        break;
    }
    setNewTransaction(auxTrans);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <S.Wrapper>
        <FormToggleTransactionType
          getTransactionFields={getTransactionFields}
        />
        <FormTransactionValue getTransactionFields={getTransactionFields} />
        <FormTransactionDescription
          getTransactionFields={getTransactionFields}
        />

        <S.SaveButtonWrapper>
          <S.SaveButton onPress={() => saveNewTransaction()}>
            <S.SaveButtonText>Salvar</S.SaveButtonText>
          </S.SaveButton>
        </S.SaveButtonWrapper>
      </S.Wrapper>
    </KeyboardAvoidingView>
  );
};

export default NewTransaction;
