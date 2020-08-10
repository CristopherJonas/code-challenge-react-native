import styled from 'styled-components/native';

export const ModalBackground = styled.View`
  background-color: #f6f7f9;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const ExitButtonBackground = styled.TouchableOpacity`
  background-color: #fff;
  border-color: #333;
  border-width: 1px;
  border-radius: 5px;
  flex: 1;
  margin: 0 10px 0 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ExitText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 18px;
`;

export const NewTransactionButtonBackground = styled.TouchableOpacity`
  background-color: #159ce4;
  border-color: #fff;
  border-width: 1px;
  border-radius: 5px;
  flex: 2;
  margin: 0 10px 0 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const NewTransactionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
