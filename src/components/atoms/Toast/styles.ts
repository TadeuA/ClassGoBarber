import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { ToastProps } from './interface';

const typeToastVariations = {
  success: css`
    background: ${({ theme }) => theme.colors['green-light']};
    color: ${({ theme }) => theme.colors.green};
  `,
  error: css`
    background: ${({ theme }) => theme.colors['red-light']};
    color: ${({ theme }) => theme.colors['red-warning']};
  `,
  info: css`
    background: ${({ theme }) => theme.colors['blue-light']};
    color: ${({ theme }) => theme.colors.blue};
  `,
};

export const Toast = styled(animated.div)<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px ${({ theme }) => theme.colors.shadow};

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${({ type }) => typeToastVariations[type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: 0;
    color: inherit;
  }
  ${({ hasDescription }) =>
    hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
