import styled from 'styled-components';

// Defina as variáveis ​​de cor
const primaryColor = '#00AAF0';
const borderColor = '#CDCDCD';
const textColor = '#FFFFFF';

// Defina o botão com uma classe para ser reutilizado em outros lugares
export const Button = styled.button`
  /* Adicione um valor padrão para o cursor */
  cursor: pointer;

  /* Adicione acessibilidade ao botão */
  padding: 20px;
  border: 1px solid ${borderColor};
  background-color: ${primaryColor};
  color: ${textColor};
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  /* Adicione uma transição suave ao :hover */
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;
