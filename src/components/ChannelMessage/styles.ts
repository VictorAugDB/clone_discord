import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: var(--mention-message);
    
    border-left: 2px solid var(--mention-detail);
    padding-left: 16px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  background-color: var(--secondary);

  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
`;
export const Header = styled.div`
  min-height: 40px;

  display: flex;
  align-items: center;

  > strong {
    font-size: 16px;
    font-weight: 500;

    color: var(--white);
  }

  > span {
    margin-left: 6px;

    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;

    color: var(--white);

    background-color: var(--discord);

    border-radius: 4px;
    padding: 4px 5px;
  }

  > time {
    margin-left: 8px;
    font-size: 13px;

    color: var(--gray);
  }
`;
export const Content = styled.div`
  font-size: 16px;
  text-align: left;

  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


