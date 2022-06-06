import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FBFAFF;
  justify-content: space-evenly;
`;

export const Cards = styled.View`
  flex: 1;
  margin:0 16px;
  z-index: 100;
  max-height: 446px;
` 

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 154px;
`

export const CircleButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: white;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 16px rgba(191, 191, 191, 0.3);
`