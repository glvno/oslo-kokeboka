import { Field } from 'formik';
import styled from '@emotion/styled';

const StyledField = styled(Field)`
  background: var(--inputbackground);
  border-bottom: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  width: 50%;
  padding-left: 10px;
  margin-bottom: 10px;
  &::placeholder {
    color: var(--text);;
`;

const TextArea = ({ name, placeholder }) => {
  return <StyledField name={name} placeholder={placeholder} component="textarea" />;
};

export default TextArea;
