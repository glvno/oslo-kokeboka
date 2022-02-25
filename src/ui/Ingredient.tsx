import Select from './Select';
import { Field } from 'formik';
import Input from './Input';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledDiv = styled.div`
  color: var(--text);
  height: 51px;
  display: flex;
  justify-content: flex-left;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledField = styled(Field)`
  border-radius: 0px;
  border-bottom: 1px var(--text) solid;
  height: 40px;
  width: 10%;
  padding-left: 10px;
  background: var(--inputbackground);
  margin-bottom: 10px;
  color: var(--text);
`;

const Ingredient: FC = ({ arrayHelpers, index }) => {
  return (
    <StyledDiv key={`ingredients${index}`}>
      <StyledField min="0" placeholder="1" type="number" name={`ingredients.${index}.qty`} />
      <Select
        name={`ingredients.${index}.units`}
        options={['pinches', 'tsps', 'tbsps', 'cups', 'pints', 'quarts', 'gallons']}
      />
      <Input name={`ingredients.${index}.name`} placeholder="Ingredient" />
      <button
        className="plus"
        type="button"
        onClick={() => {
          return arrayHelpers.insert(index + 1, {
            name: '',
            qty: '',
            units: '',
          });
        }}
      >
        +
      </button>
    </StyledDiv>
  );
};

export default Ingredient;
