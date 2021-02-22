import React from 'react';

import { Button } from './styles'

export interface ButtonProps {
  isHome?: boolean;
  hasNotifications?: boolean;
  selected?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ButtonProps> = ({
  isHome,
  hasNotifications,
  selected,
  mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src="https://svgshare.com/i/Pb9.svg" alt="logo" />}
    </Button>
  )
}

export default ServerButton;