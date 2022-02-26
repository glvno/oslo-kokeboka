import { FC } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  border: 1px var(--text) solid;
  height: 30px;
  border-radius: 5px;
  background: var(--input-background);
`;

interface ButtonProps {
  label: string;
  onSubmit?: () => void;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isDisabled: boolean;
}

const Button: FC<ButtonProps> = ({ label, type, onClick, isDisabled }) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={isDisabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
