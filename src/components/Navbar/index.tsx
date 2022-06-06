import React from 'react';

import {
  NavbarContainer, 
  NavbarButton,
} from './styles';

import Catpaw from '../../assets/icons/Catpaw.svg';
import Messages from '../../assets/icons/Messages.svg';
import User from '../../assets/icons/User.svg';

export function Navbar () { 
  return (
    <NavbarContainer>
      <NavbarButton>
        <Catpaw />
      </NavbarButton>
      <NavbarButton>
        <Messages />
      </NavbarButton>
      <NavbarButton>
        <User />
      </NavbarButton>
    </NavbarContainer>
  )
}