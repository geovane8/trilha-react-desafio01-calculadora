import { ButtonContainer } from './styles';

/**
 * Um botão reutilizável que pode ser usado em diferentes partes do aplicativo.
 * @param {string} label - O texto exibido no botão.
 * @param {function} onClick - Uma função a ser executada quando o botão for clicado.
 */
const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} type="button" aria-label={label}>
      {/* Verifique se a prop label existe antes de renderizá-la */}
      {label && label}
    </ButtonContainer>
  );
};

export default Button;
