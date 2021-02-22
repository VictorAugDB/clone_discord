import React from 'react';

import { Container, UserAvatar, UserData, Icons, Profile, MicIcon, HeadsetIcon, SettingsIcon } from './styles'

const Userinfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <UserAvatar />
        <UserData>
          <strong>Victor Augusto</strong>
          <span>#1141</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default Userinfo;