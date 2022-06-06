import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 446px;
  filter: drop-shadow(0px 10px 16px rgba(191, 191, 192, 0.3));
`;

export const CatImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 446px;
  border-radius: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 16px;
`

export const Like = styled(Animated.View)`
  border: 4px solid #6ee3b4;
  border-radius: 5px;
  font-weight: bold;
  padding: 8px;
`;

export const Nope = styled(Animated.View)`
  border: 4px solid #ec5288;
  border-radius: 5px;
  font-weight: bold;
  padding: 8px;
`;

export const LikeLabel = styled.Text`
  font-size: 32px;
  color: #6ee3b4;
  font-weight: bold;
`;

export const NopeLabel = styled.Text`
   font-size: 32px;
  color: #ec5288;
  font-weight: bold;
`;

export const Footer = styled.View`
  background-color: #fff;
  height: 48px;
  margin-bottom: -16px; 
  padding: 8px 16px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const CatInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Name = styled.Text`
  font-family: Nunito;
  color: #434141;
  font-size: 18px;
  font-weight: bold;
`;

export const AffectionLevel = styled.Text`
  color: #434141;
  font-size: 16px;
  font-weight: 700;

`;

export const CatOrigin = styled.Text`
  color: #BFBFC0;
  font-size: 12px;
`;
