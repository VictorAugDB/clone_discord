import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;

  padding: 3px 6px 0 16px;
  flex-direction: column;

  background-color: var(--secondary);

  max-height: calc(100vh - 46px);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.h1`
  margin-top: 20px;
  color: var(--gray);
  
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const User = styled.div`
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {   
    margin-left: 8px;

    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;

    color: var(--white);

    background-color: var(--discord);

    border-radius: 4px;
    padding: 4px 5px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  background-color: var(--primary);

  border-radius: 50%;
  &.bot {
    background-color: var(--mention-detail);
  }
`;


