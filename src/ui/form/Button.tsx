import { FC } from 'react';
import styled from '@emotion/styled';

const DefaultButton = styled.button`
  border: 1px var(--text) solid;
  border-radius: 5px;
  &:disabled {
    opacity: 0.2;
  }
`;

const SmallButton = styled(DefaultButton)`
  padding: 5px;
`;

const SalmonButton = styled(DefaultButton)`
  background: var(--text);
  color: var(--background);
  padding: 10px;
`;

const WineButton = styled(DefaultButton)`
  background: var(--input-background);
  padding: 10px;
`;

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isDisabled?: boolean;
  style?: string;
}

const Button: FC<ButtonProps> = ({ label, type, onClick, style = 'wine', isDisabled = false }) => {
  switch (style) {
    case 'wine':
      return (
        <WineButton onClick={onClick} type={type} disabled={isDisabled}>
          {label}
        </WineButton>
      );
    case 'salmon':
      return (
        <SalmonButton onClick={onClick} type={type} disabled={isDisabled}>
          {label}
        </SalmonButton>
      );
    case 'small':
      return (
        <SmallButton onClick={onClick} type={type} disabled={isDisabled}>
          {label}
        </SmallButton>
      );
  }
};

export default Button;
