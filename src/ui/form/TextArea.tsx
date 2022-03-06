import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC, useEffect } from 'react';
import Flex from '../Flex';
import ErrorLabel from './ErrorLabel';

const StyledField = styled(Field)`
  background: var(--dark-wine);
  border-bottom: 1px var(--salmon) solid;
  color: var(--salmon);
  height: 51px;
  padding-left: 10px;
  padding-top:10px;
  resize: none;
  flex-grow: 1;
  &::placeholder {
    color: var(--salmon);;
`;

interface TextAreaProps {
  name: string;
  placeholder: string;
  handleTextAreaChange?: () => void;
}

const TextArea: FC<TextAreaProps> = ({ name, placeholder, handleTextAreaChange = undefined }) => {
  useEffect(() => handleTextAreaChange);
  return (
    <Flex direction="column" align="stretch" width="100%">
      <ErrorLabel name={name} />
      <StyledField name={name} placeholder={placeholder} component="textarea" />
    </Flex>
  );
};

export default TextArea;
