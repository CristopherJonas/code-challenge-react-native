import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex: 1;
`;

export const SaveButtonWrapper = styled.View`
  margin-top: 15px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #159ce4;
  width: 300px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: #f7f7f7;
  border-width: 1px;
  margin: 5px;
  box-shadow: 1px 0px 2px #333;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
