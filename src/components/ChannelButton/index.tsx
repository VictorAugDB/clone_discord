import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container 
    className={selected ? 'active' : ''}
    channelName={channelName}
    >
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
    
      <div className='actions'>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ChannelButton;