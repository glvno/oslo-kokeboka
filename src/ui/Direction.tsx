import styled from '@emotion/styled';
import { ArrayHelpers, FieldArrayRenderProps } from 'formik';
import TextArea from './form/TextArea';
import { FC, useState } from 'react';
import Button from './form/Button';

const StyledDiv = styled.div`
  color: var(--salmon);
  height: 51px;
  display: flex;
  justify-content: flex-left;
  gap: 10px;
  align-items: center;
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
        padding="5px"
        type="button"
        label="+"
        isDisabled={buttonDisabled}
        onClick={() => arrayHelpers.insert(index + 1, '')}
      />{' '}
      {hasMinusButton ? (
        <Button type="button" label="-" onClick={() => arrayHelpers.remove(index)} padding="5px" />
      ) : (
        ''
      )}
    </StyledDiv>
  );
};

export default Direction;
