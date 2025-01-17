import styled from "styled-components";

import { ButtonProps } from '.'


export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;

  background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  cursor: pointer;
  position: relative;
  border-radius: 50%;

  > img {
    width: 24px;
    height: 24px;
  }

  &&::before {
    width: 9px;
    height: 9px;

    position: absolute;

    left: -17px;
    top: calc(50% - 4.5px);
    
    border-radius: 50%;
    background-color: var(--white);

    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'}
  }

  &&::after {
    width: auto;
    height: 16px;
    padding: 0 4px;

    background-color: var(--notification);

    position: absolute;
    right: -4px;
    bottom: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${props => props.mentions && props.mentions}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active, &:hover {
    border-radius: 25%;
    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
  }
  
  &.isHome {
    border-radius: 25%;
  }
`;



