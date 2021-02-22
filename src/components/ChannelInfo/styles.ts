import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;
  display: flex;

  align-items: center;

  padding: 0 17px;

  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 32px;

  color: var(--symbol);
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
  margin-left: 8px;
`;

export const Separator = styled.div`
  height: 24px;
  border-left: 1px solid var(--sextary);

  margin: 0 13px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: var(--gray);
`;






