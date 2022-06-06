import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  padding: 2px;
  width: 84px;
  background-color: #E3E3E4;
  border-radius: 28px;
  gap: 5px;
`;

export const Button = styled(RectButton)`
  width: 40px;
  height: 24px;
  background-color: ${props => props.active ? '#FFF' : '#E3E3E4'};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
` 