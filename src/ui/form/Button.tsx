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

  $:disabled {
    opacity 0.2;
  }
`;

interface ButtonProps extends StyledButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  type: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type,
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

// const Button: FC<ButtonProps> = ({ label, type, onClick, style = 'wine', isDisabled = false }) => {
//   switch (style) {
//     case 'wine':
//       return (
//         <WineButton onClick={onClick} type={type} disabled={isDisabled}>
//           {label}
//         </WineButton>
//       );
//     case 'salmon':
//       return (
//         <SalmonButton onClick={onClick} type={type} disabled={isDisabled}>
//           {label}
//         </SalmonButton>
//       );
//     case 'small':
//       return (
//         <SmallButton onClick={onClick} type={type} disabled={isDisabled}>
//           {label}
//         </SmallButton>
//       );
//     case 'ochre':
//       return (
//         <OchreButton onClick={onClick} type={type}>
//           {label}
//         </OchreButton>
//       );
//   }
// };

export default Button;
