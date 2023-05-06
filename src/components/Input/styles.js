import styled from 'styled-components';

// Defina as variáveis ​​de cor
const primaryColor = '#AAAAFF';

// Defina o container com uma classe mais descritiva
export const InputWrapper = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${primaryColor};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: 'Roboto';
`;

// Defina o input com uma classe para ser reutilizado em outros lugares
export const Input = styled.input`
  width: 100%;
  height: 75px;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 10px;
  font-size: 24px;
  font-family: 'Roboto';

  /* Remova as propriedades de cor aqui e mova-as para o InputWrapper */
`;

// Adicione um rótulo acessível para o input
<Input aria-label="Digite aqui o seu texto" />
