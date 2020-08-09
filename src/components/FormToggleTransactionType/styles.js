import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px 0;
`;

export const DecrementText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.color};
  font-weight: bold;
  margin-right: 5px;
`;

export const IncrementText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.color};
  font-weight: bold;
  margin-left: 5px;
`;
