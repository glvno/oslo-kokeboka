import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledField = styled(Field)`
  background: var(--dark-wine);
  border: 1px var(--salmon) solid;
  color: var(--salmon);
  height: 51px;
  border-radius: 5px;
  padding-left: 10px;
`;

interface SelectProps {
  name: string;
  options: string[];
  placeholder: string;
}

const Select: FC<SelectProps> = ({ name, options, placeholder }) => {
  return (
    <StyledField as="select" name={name}>
      <option value="" label={placeholder} />
      {options.map((option: string) => (
        <option value={option} label={option} key={option} />
      ))}
    </StyledField>
  );
};
export default Select;
