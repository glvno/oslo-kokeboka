import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledField = styled(Field)`
  background: var(--inputbackground);
  border-bottom: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-family: monospace;
`;

const InputHHMM: FC = (name) => {
  return (
    <div>
      <StyledField
        type="number"
        placeholder="00"
        step="1"
        min="0"
        max="12"
        name={`${name}.hours`}
      />
      hours{'  '}
      <StyledField
        placeholder="00"
        type="number"
        step="5"
        min="0"
        max="55"
        name={`${name}.minutes`}
      />
      {'  '}
      minutes
    </div>
  );
};

export default InputHHMM;
