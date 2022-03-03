import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC, useEffect } from 'react';

const StyledField = styled(Field)`
  background: var(--dark-wine);
  border-bottom: 1px var(--salmon) solid;
  color: var(--salmon);
  height: 51px;
  padding-left: 10px;
  margin-bottom: 15px;
  flex-grow: 1;
  &::placeholder {
    color: var(--salmon);
  }
`;

interface InputProps {
  name: string;
  placeholder: string;
  handleInputChange?: () => void;
}

const Input: FC<InputProps> = ({ name, placeholder, handleInputChange = undefined }) => {
  useEffect(() => handleInputChange);
  return <StyledField type="input" name={name} placeholder={placeholder} />;
};

export default Input;
