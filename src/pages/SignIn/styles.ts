import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import background from '../../assets/sign-in-background.png';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX (-50px);
  }
  to{
    opacity: 1;
    transform: translateX (0);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
`;

export const Banner = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1.5s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    > a {
      color: ${({ theme }) => theme.colors['gray-3']};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => shade(0.2, theme.colors['gray-3'])};
      }
    }
  }
  > a {
    color: ${({ theme }) => theme.colors['yellow-mustard']};
    display: block;
    margin: 0 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors['yellow-mustard'])};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
