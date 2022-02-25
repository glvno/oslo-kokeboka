import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledField = styled(Field)`
  background: var(--input-background);
  border: 1px var(--text) solid;
  color: var(--text);
  height: 48px;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

interface SelectProps {
  name: string;
  options: Array<string | number>;
  placeholder: string;
}

const Select: FC<SelectProps> = ({ name, options, placeholder }) => {
  return (
    <StyledField as="select" name={name}>
      <option value="" label={placeholder} />
      {options.map((option: string, i) => (
        <option value={option} label={option} key={`${option}${i.toString()}`} />
      ))}
    </StyledField>
  );
};
export default Select;
