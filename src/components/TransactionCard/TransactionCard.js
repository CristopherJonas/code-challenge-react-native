import React from 'react';
import transactionTypeEnum from '../../common/TransactionTypeEnum';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MaskService} from 'react-native-masked-text';

const TransactionCard = ({type, description, value}) => {
  const transactionType =
    type === transactionTypeEnum.INCREMENT
      ? {
          iconName: 'plus',
          color: '#436bd9',
        }
      : {
          iconName: 'minus',
          color: '#d94343',
        };

  return (
    <S.CardWrapper testID={'transactionCard'}>
      <S.TransactionType>
        <Icon
          name={transactionType.iconName}
          size={35}
          color={transactionType.color}
          testID={'transactionCardIcon'}
        />
      </S.TransactionType>
      <S.TransactionDescriptionWrapper>
        <S.TransactionDescriptionText numberOfLines={1}>
          {description}
        </S.TransactionDescriptionText>
      </S.TransactionDescriptionWrapper>
      <S.TransactionValueWrapper color={transactionType.color}>
        <S.TransactionValueText>
          {MaskService.toMask('money', value, {
            unit: 'R$',
            separator: ',',
            delimiter: '.',
          })}
        </S.TransactionValueText>
      </S.TransactionValueWrapper>
    </S.CardWrapper>
  );
};

export default TransactionCard;
