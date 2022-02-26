import Select from './form/Select';
import { Field, ArrayHelpers } from 'formik';
import Input from './form/Input';
import styled from '@emotion/styled';
import { FC } from 'react';
import Button from './form/Button';

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
  background: var(--input-background);
  margin-bottom: 10px;
  color: var(--text);
`;

interface IngredientProps {
  arrayHelpers: ArrayHelpers;
  index: number;
}

const Ingredient: FC<IngredientProps> = ({ arrayHelpers, index }) => {
  return (
    <StyledDiv key={`ingredients${index}`}>
      <StyledField min="0" placeholder="1" type="number" name={`ingredients.${index}.qty`} />
      <Select
        placeholder="units"
        name={`ingredients.${index}.units`}
        options={['pinches', 'tsps', 'tbsps', 'cups', 'pints', 'quarts', 'gallons']}
      />
      <Input name={`ingredients.${index}.name`} placeholder="Ingredient" />
      <Button
        type="button"
        label="+"
        onClick={() => arrayHelpers.insert(index + 1, { name: '', quantity: '', units: '' })}
      />
    </StyledDiv>
  );
};

export default Ingredient;
