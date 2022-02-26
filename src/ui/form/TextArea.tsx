import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC, useEffect } from 'react';

const StyledField = styled(Field)`
  background: var(--input-background);
  border-bottom: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  padding-left: 10px;
  margin-bottom: 10px;
  padding-top:10px;
  resize: none;
  flex-grow: 1;
  flex-basis:200px;
  &::placeholder {
    color: var(--text);;
`;

interface TextAreaProps {
  name: string;
  placeholder: string;
}

const TextArea: FC<TextAreaProps> = ({ name, placeholder, handleTextAreaChange }) => {
  useEffect(() => handleTextAreaChange);
  return <StyledField name={name} placeholder={placeholder} component="textarea" />;
};

export default TextArea;
