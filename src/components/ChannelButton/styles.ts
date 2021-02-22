import styled from "styled-components";
import { Props } from '.';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px, 3px;

  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;

    > span {
      margin-left: 5px;
      color: var(--senary);
    }
  }

  > div.actions {
    display: none;
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    >div.actions {
      display: inline;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 24px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  cursor: pointer;

  color: var(--symbol);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  cursor: pointer;

  color: var(--symbol);

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;






