import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Wrapper = styled.View`
  align-items: center;
`;

export const FieldWrapper = styled.View`
  align-items: center;
  background-color: #f7f7f7;
  width: 300px;
  padding: 10px 0;
  border-radius: 5px;
`;

export const ValueInput = styled(TextInputMask)`
  font-weight: bold;
  font-size: 20px;
`;
