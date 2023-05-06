import styled from 'styled-components';

// Container
// Define o estilo do contêiner principal
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #CACACA;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Content
// Define o estilo do conteúdo dentro do contêiner
export const Content = styled.div`
  background-color: #FFFFFF;
  width: 50%;
`;

// Row
// Define um estilo para uma linha horizontal de itens
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: inherit; // Herda a propriedade align-items do pai
`;

// Column
// Define um estilo para uma coluna vertical de itens
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: inherit; // Herda a propriedade align-items do pai
`;
