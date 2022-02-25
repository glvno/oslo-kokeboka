import styled from '@emotion/styled';
import { FieldArray, Field } from 'formik';
import TextArea from './TextArea';
import { FC } from 'react';

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

const DirectionsBox: FC = ({ props }) => {
  return (
    <FieldArray
      name="directions"
      render={(arrayHelpers) => {
        return props.values.directions.map((_, index) => {
          return (
            <StyledDiv key={`directions${index * 10}`}>
              <TextArea
                placeholder="Enter directions here..."
                name={`directions.${index}`}
                key={`directions${index * 10}`}
              />
              <button
                className="plus"
                type="button"
                onClick={() => arrayHelpers.insert(index + 1, '')}
              >
                +
              </button>
            </StyledDiv>
          );
        });
      }}
    />
  );
};

export default DirectionsBox;
