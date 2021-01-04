import styled, { css } from 'styled-components';
import { ContainerProps } from './interface';
import { Tooltip } from '../../atoms';

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.colors['gray-1']};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors['gray-1']};
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  svg {
    margin-right: 16px;
    color: ${({ theme }) => theme.colors['gray-4']};
    ${({ isFilled }) =>
      isFilled &&
      css`
        color: ${({ theme }) => theme.colors['yellow-mustard']};
      `}
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors['yellow-mustard']};
      svg {
        color: ${({ theme }) => theme.colors['yellow-mustard']};
      }
    `}

  ${({ isErrors }) =>
    isErrors &&
    css`
      border-color: ${({ theme }) => theme.colors['red-warning']};
      span {
        color: ${({ theme }) => theme.colors['red-warning']};
      }
      svg {
        color: ${({ theme }) => theme.colors['red-warning']};
      }
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: ${({ theme }) => theme.colors['red-warning']};
    color: ${({ theme }) => theme.colors.white};
    &::before {
      border-color: ${({ theme }) => theme.colors['yellow-mustard']}
        ${({ theme }) => theme.colors.transparent};
    }
  }
`;
