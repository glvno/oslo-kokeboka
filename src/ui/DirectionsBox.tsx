import styled from '@emotion/styled';
import { FieldArray } from 'formik';
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

const DirectionsBox: FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  let keyCounter = 0;
  return (
    <FieldArray
      name="directions"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.directions.map((_, index) => {
          keyCounter += 1;
          return (
            <StyledDiv key={keyCounter}>
              <TextArea
                placeholder="Enter directions here..."
                name={`directions.${index}`}
                handleTextAreaChange={() => {
                  setButtonDisabled(
                    arrayHelpers.form.values.directions[index].length > 0 ? false : true
                  );
                }}
              />
              <Button
                type="button"
                label="+"
                isDisabled={buttonDisabled}
                onClick={() => arrayHelpers.insert(index + 1, '')}
              />
            </StyledDiv>
          );
        });
      }}
    />
  );
};

export default DirectionsBox;
