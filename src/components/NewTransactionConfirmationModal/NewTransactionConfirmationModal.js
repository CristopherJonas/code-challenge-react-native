import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';

import * as S from './styles';
const NewTransactionConfirmationModal = ({
  visible,
  onPressExit,
  onPressNewTransaction,
}) => {
  return (
    <Modal isVisible={visible}>
      <S.ModalBackground>
        <S.Title>Transação salva com sucesso!!</S.Title>
        <S.ButtonsWrapper>
          <S.ExitButtonBackground onPress={onPressExit}>
            <S.ExitText>Sair</S.ExitText>
          </S.ExitButtonBackground>
          <S.NewTransactionButtonBackground onPress={onPressNewTransaction}>
            <S.NewTransactionText>Nova transação</S.NewTransactionText>
          </S.NewTransactionButtonBackground>
        </S.ButtonsWrapper>
      </S.ModalBackground>
    </Modal>
  );
};

export default NewTransactionConfirmationModal;
