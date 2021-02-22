import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage 
          key={n}
          author="Victor Augusto"
          date="22/02/2021"
          content="Isso é uma mensagem"
          />
        ))}
        
        <ChannelMessage 
          author="Diego Fernandes"
          date="22/02/2021"
          hasMention
          isBot
          content={
            <>
              <Mention>@Victor Augusto</Mention> me carrega no LoL e no CS de novo por favor ?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;