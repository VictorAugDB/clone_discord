import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SN;
  display: flex;

  background-color: var(--secondary);

  padding: 0 12px 0 16px;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 24px;
  height: 24px;

  cursor: pointer;

  color: var(--white);
`;






