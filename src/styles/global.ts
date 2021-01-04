import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:${({ theme }) => theme.colors['gray-0']};
    color:${({ theme }) => theme.colors.white};
  }

  body, input, button{
    font: ${({ theme }) => theme.fonts['roboto-slab']};
  }
  input {
    color: ${({ theme }) => theme.colors['gray-3']};
    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-4']};
    }
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }


  button{
    cursor: pointer;
  }
`;
