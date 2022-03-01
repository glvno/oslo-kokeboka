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
const OchreButton = styled(DefaultButton)`
  background: var(--ochre);
  padding: 10px;
  color: var(--background);
  border-color: var(--background);
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.01em;
  line-height: 122%;
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
    case 'ochre':
      return (
        <OchreButton onClick={onClick} type={type} label={label}>
          {label}
        </OchreButton>
      );
  }
};

export default Button;
