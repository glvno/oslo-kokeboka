import { Field } from 'formik';
import styled from '@emotion/styled';

const StyledField = styled(Field)`
  background: var(--background);
  border: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  border-radius: 5px;
  width: 50%;
  padding-left: 10px;
  margin-bottom: 10px;
`;
const Input = ({ name, placeholder }) => {
  return <StyledField type="input" name={name} placeholder={placeholder} />;
};

export default Input;
