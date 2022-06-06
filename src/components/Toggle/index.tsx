import React, {
  useState
} from 'react';

import { ButtonsContainer, Button } from './styles';
import Fire from '../../assets/icons/fire.svg';
import Star from '../../assets/icons/star.svg';

export function Toggle() {
  
  const [isActive, setIsActive] = useState("star");

  return (
    <ButtonsContainer>
      {/* <Button title={isFire ? 'Fire' : 'Star'} onPress={() => setIsFire(!isFire)} />
       */}
       <Button active={isActive}>
         <Fire />
       </Button>
       <Button>
         <Star />
       </Button>
    </ButtonsContainer> 
  )

}