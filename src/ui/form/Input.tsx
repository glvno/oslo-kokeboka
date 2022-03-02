import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC, useEffect } from 'react';

const StyledField = styled(Field)`
  background: var(--input-background);
  border-bottom: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  padding-left: 10px;
  flex-grow: 1;
  box-sizing: border-box;
  &::placeholder {
    color: var(--text);
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
