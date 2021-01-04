import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.colors['gray-0']};
  background: ${({ theme }) => theme.colors['yellow-mustard']};
  margin-top: 16px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  transition: background-color 0.2s;
  &:hover {
    background: ${({ theme }) => shade(0.2, theme.colors['yellow-mustard'])};
  }
`;
