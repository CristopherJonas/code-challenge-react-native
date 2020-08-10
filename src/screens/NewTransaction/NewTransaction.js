import React, {useState, useContext} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import FormToggleTransactionType from '../../components/FormToggleTransactionType/FormToggleTransactionType';
import FormTransactionDescription from '../../components/FormTransactionDescription/FormTransactionDescription';
import FormTransactionValue from '../../components/FormTransactionValue/FormTransactionValue';
import {TransactionContext} from '../../Context';
import {MaskService} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import transactionTypeEnum from '../../common/TransactionTypeEnum';
import NewTransactionConfirmationModal from '../../components/NewTransactionConfirmationModal/NewTransactionConfirmationModal';

const NewTransaction = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {updateTransactions} = useContext(TransactionContext);
  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState(transactionTypeEnum.DECREMENT);

  const saveNewTransaction = () => {
    const newtransactionObj = {
      type: type,
      value: MaskService.toRawValue('money', value),
      description: description,
    };

    updateTransactions(newtransactionObj);

    setModalVisible(true);
  };

  const onPressExit = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  const onPressNewTransaction = () => {
    setDescription('');
    setValue(0);
    setType(transactionTypeEnum.DECREMENT);
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <NewTransactionConfirmationModal
        visible={modalVisible}
        onPressExit={onPressExit}
        onPressNewTransaction={onPressNewTransaction}
      />
      <S.Wrapper>
        <FormToggleTransactionType value={type} updateField={setType} />
        <FormTransactionValue value={value} updateField={setValue} />
        <FormTransactionDescription
          value={description}
          updateField={setDescription}
        />

        <S.SaveButtonWrapper>
          <S.SaveButton
            onPress={() => saveNewTransaction()}
            disabled={value === 0 || description === ''}
            color={value === 0 || description === '' ? '#ccc' : '#159ce4'}>
            <S.SaveButtonText>Salvar</S.SaveButtonText>
          </S.SaveButton>
        </S.SaveButtonWrapper>
      </S.Wrapper>
    </KeyboardAvoidingView>
  );
};

export default NewTransaction;
