import styled from "styled-components";
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  position: relative;

  background-color: var(--gray);

  border-radius: 50%;

  &&::after {
    position: absolute;

    width: 16px;
    height: 16px;

    background-color: var(--notification);

    bottom: -2px;
    right: -2px;

    border-radius: 50%;

    text-align: center;
    line-height: 16px;
    font-size: 32px;
    font-weight: bold;

    content: '-';
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  > strong {
    font-size: 13px;
    color: var(--white);
   }

   > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 8px;
  }
`;

export const  MicIcon = styled(Mic)`
  width: 24px;
  height: 24px;

  color: var(--white);
  opacity: 0.2;

  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
export const  HeadsetIcon = styled(Headset)`
  width: 24px;
  height: 24px;

  color: var(--white);
  opacity: 0.2;

  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
export const  SettingsIcon = styled(Settings)`
  width: 24px;
  height: 24px;

  color: var(--white);
  opacity: 0.2;

  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;




