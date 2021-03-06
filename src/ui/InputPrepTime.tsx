import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC } from 'react';
import Flex from './Flex';

const StyledField = styled(Field)`
  background: var(--dark-wine);
  border-bottom: 1px var(--salmon) solid;
  color: var(--salmon);
  height: 51px;
  padding-left: 10px;
  font-family: monospace;
  width: 100%;
`;

interface InputPrepTimeProps {
  name: string;
}

const InputPrepTime: FC<InputPrepTimeProps> = (name) => {
  return (
    <Flex gap="15px" align="center">
      <label style={{ display: 'inline-block' }}> Time to prepare:</label>
      <StyledField
        type="number"
        placeholder="00"
        step="1"
        min="0"
        max="12"
        name={`${name}.hours`}
      />
      <label>hours</label>
      {'  '}
      <StyledField
        placeholder="00"
        type="number"
        step="5"
        min="0"
        max="55"
        name={`${name}.minutes`}
      />
      {'  '}
      <label>minutes</label>
    </Flex>
  );
};

export default InputPrepTime;
