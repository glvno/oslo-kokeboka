import { FC } from 'react';
import styled from '@emotion/styled';

interface StyledButtonProps {
  background?: string;
  padding?: string;
  color?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 5px;
  font-weight: 600;
  font-size: 17px;
  border-width: 1px;
  border-style: solid;

  background: var(--${({ background }) => background});
  padding: ${({ padding }) => padding};
  border-color: var(--${({ color }) => color});
  color: var(--${({ color }) => color});
  &:disabled {
    opacity: 0.2;
  }
`;

interface ButtonProps extends StyledButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'submit',
  isDisabled = false,
  background = 'ochre',
  padding = '15px',
  color = 'darkest-wine',
}) => {
  return (
    <StyledButton
      background={background}
      padding={padding}
      onClick={onClick}
      disabled={isDisabled}
      color={color}
      type={type}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
