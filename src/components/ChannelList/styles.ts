import styled from "styled-components";
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;
  padding: 24px 10px 0 16px;

  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  > span {
    color: var(--gray);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 22px;
  height: 22px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;








