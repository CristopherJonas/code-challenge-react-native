import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const CardWrapper = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 10px;
  margin-top: 15px;
  height: 60px;
  width: ${width - 20}px;
  box-shadow: 1px 0px 2px #ccc;
`;

export const TransactionType = styled.View`
  align-items: center;
  background-color: #fff;
  justify-content: center;
  border-radius: 10px;
  width: 50px;
`;

export const TransactionDescriptionWrapper = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
`;

export const TransactionDescriptionText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const TransactionValueWrapper = styled.View`
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TransactionValueText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
