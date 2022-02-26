import styled from '@emotion/styled';
import { FieldArray, ArrayHelpers } from 'formik';
import TextArea from './form/TextArea';
import { FC, useState } from 'react';
import Button from './form/Button';

const StyledDiv = styled.div`
  color: var(--text);
  height: 51px;
  display: flex;
  justify-content: flex-left;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

interface DirectionProps {
  arrayHelpers: ArrayHelpers;
  index: number;
}

const Direction: FC<DirectionProps> = ({ arrayHelpers, index }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [hasMinusButton, setHasMinusButton] = useState(false);

  return (
    <StyledDiv>
      <TextArea
        placeholder="Enter directions here..."
        name={`directions.${index}`}
        handleTextAreaChange={() => {
          setHasMinusButton(index === 0 ? false : true);
          console.log(arrayHelpers);
          setButtonDisabled(arrayHelpers.form.values.directions[index].length > 0 ? false : true);
        }}
      />
      <Button
        type="button"
        label="+"
        isDisabled={buttonDisabled}
        onClick={() => arrayHelpers.insert(index + 1, '')}
      />{' '}
      {hasMinusButton ? (
        <Button type="button" label="-" onClick={() => arrayHelpers.remove(index)} />
      ) : (
        ''
      )}
    </StyledDiv>
  );
};

export default Direction;
