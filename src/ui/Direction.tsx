import styled from '@emotion/styled';
import { ArrayHelpers, FieldArrayRenderProps } from 'formik';
import TextArea from './form/TextArea';
import { FC, useState } from 'react';
import Button from './form/Button';

const StyledDiv = styled.div`
  color: var(--text);
  height: 51px;
  display: flex;
  justify-content: flex-left;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

interface DirectionProps {
  arrayHelpers: ArrayHelpers & FieldArrayRenderProps;
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
          setButtonDisabled(arrayHelpers.form.values.directions[index].length > 0 ? false : true);
        }}
      />
      <Button
        style="small"
        isDisabled={!hasMinusButton}
        type="button"
        label="-"
        onClick={() => arrayHelpers.remove(index)}
      />
      <Button
        type="button"
        label="+"
        style="small"
        isDisabled={buttonDisabled}
        onClick={() => arrayHelpers.insert(index + 1, '')}
      />{' '}
    </StyledDiv>
  );
};

export default Direction;
