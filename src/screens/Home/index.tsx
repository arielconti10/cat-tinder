import { useState, useEffect, useRef, useCallback } from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { 
  Container, 
  Cards,
  Buttons,
  CircleButton
} from './styles';

import { Swipeable, SwipeHandler } from '../../components/Swipeable';
import { Navbar } from '../../components/Navbar';
import { Toggle } from '../../components/Toggle';

import Heart from '../../assets/icons/heart.svg';
import Nope from '../../assets/icons/nope.svg';
import api from '../../services/api';

export type Cat = {
  id: string;
  name: string;
  affection_level: string;
  origin: string;
  image: {
    id: string;
    url: string;
  }
}

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]);
  const topCard = useRef<SwipeHandler>(null);
  const scale = useSharedValue(0);

  useEffect(() => { 
    async function loadCats(){
      const response = await api.get('/breeds');
      console.log(response);
      setCats(response.data);
    }
    loadCats();
  }, []);

  const onSwipe = useCallback((image_id: string) => { 
      const data = {
        image_id: image_id,
        value: topCard.current?.like
      }
      api.post('/votes', data);

    setCats(cats.slice(0, cats.length - 1));
  }, [cats]);
  

  return (
    <Container>
      <Toggle />
      
      <Cards>
        {cats.map((profile, index) => {
          const onTop = index === cats.length - 1;
          const ref = onTop ? topCard : null;
          return (
            <Swipeable
              ref={ref}
              key={profile.id}
              profile={profile}
              scale={scale}
              onSwipe={() => onSwipe(profile.image.id ? profile.image.id : profile.id)}
              onTop={onTop}
            />
          );
        })}
      </Cards>
      <Buttons>
        <CircleButton
          onPress={() => {
            topCard.current?.swipeLeft();
          }}
        >
          <Nope />
        </CircleButton>
        <CircleButton
          onPress={() => {
            topCard.current?.swipeRight();
          }}
        >
          <Heart />
        </CircleButton>
      </Buttons>
      <Navbar />
    </Container>
  )
}