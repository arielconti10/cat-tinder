import * as React from "react";
import { Dimensions } from "react-native";

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

import {
   Container, 
   CatImage, 
   Overlay, 
   Header, 
   Like, 
   Nope, 
   LikeLabel, 
   NopeLabel, 
   Footer, 
   Name, 
   AffectionLevel,
   CatOrigin,
   CatInfo
} from "./styles";
import type { Cat } from "../../screens/Home";

const { width } = Dimensions.get("window");
export const α = Math.PI / 12;

interface CatProfileProps {
  profile: Cat;
  translateX: Animated.SharedValue<number>;
  translateY: Animated.SharedValue<number>;
  scale: Animated.SharedValue<number>;
  onTop: boolean;
};

export function CatProfile({
  profile,
  translateX,
  translateY,
  onTop,
  scale,
}: CatProfileProps) {
  const x = useDerivedValue(() => (onTop ? translateX.value : 0));
  const container = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      {
        rotate: `${interpolate(
          x.value,
          [-width / 2, 0, width / 2],
          [α, 0, -α],
          Extrapolate.CLAMP
        )}rad`,
      },
      { scale: onTop ? 1 : scale.value },
    ],
  }));
  const nope = useAnimatedStyle(() => ({
    opacity: interpolate(x.value, [-width / 4, 0], [1, 0]),
  }));
  const like = useAnimatedStyle(() => ({
    opacity: interpolate(x.value, [0, width / 4], [0, 1], Extrapolate.CLAMP),
  }));

  return (
    <Container style={container}>
      {profile.image && (
        <CatImage source={{uri: profile.image.url}} />
      )}
      
      <Overlay>
        <Header>
          <Like style={like}>
            <LikeLabel>LIKE</LikeLabel>
          </Like>
          <Nope style={nope}>
            <NopeLabel>NOPE</NopeLabel>
          </Nope>
        </Header>
        <Footer>
          <CatInfo>
            <Name>{profile.name}</Name>
            <AffectionLevel>{profile.affection_level}</AffectionLevel>
          </CatInfo>
          <CatOrigin>{profile.origin}</CatOrigin>
        </Footer>
      </Overlay>
    </Container>
  )
}