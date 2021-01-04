import styled from 'styled-components';

export const Tooltip = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${({ theme }) => theme.colors['yellow-mustard']};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors['gray-0']};
    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.colors['yellow-mustard']}
        ${({ theme }) => theme.colors.transparent};
      border-width: 6px 6px 0 6px;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      position: absolute;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
