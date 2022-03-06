import Select from './form/Select';
import { Field, ArrayHelpers, FieldArrayRenderProps } from 'formik';
import Input from './form/Input';
import styled from '@emotion/styled';
import { FC, useState } from 'react';
import Button from './form/Button';

const StyledDiv = styled.div`
  color: var(--salmon);
  height: 51px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledField = styled(Field)`
  border-radius: 0px;
  border-bottom: 1px var(--salmon) solid;
  height: 51px;
  width: 10%;
  padding-left: 10px;
  background: var(--dark-wine);
  color: var(--salmon);
`;

interface IngredientProps {
  arrayHelpers: ArrayHelpers & FieldArrayRenderProps;
  index: number;
}

const Ingredient: FC<IngredientProps> = ({ arrayHelpers, index }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [hasMinusButton, setHasMinusButton] = useState(false);
  return (
    <StyledDiv>
      <StyledField min="0" placeholder="1" type="number" name={`ingredients.${index}.qty`} />
      <Select
        placeholder="units"
        name={`ingredients.${index}.units`}
        options={['pinches', 'tsps', 'tbsps', 'cups', 'pints', 'quarts', 'gallons']}
      />
      <Input
        name={`ingredients.${index}.name`}
        placeholder="Ingredient"
        handleInputChange={() => {
          setHasMinusButton(index > 0 ? true : false);
          setButtonDisabled(
            arrayHelpers.form.values.ingredients[index].name.length > 0 ? false : true
          );
        }}
      />
      <Button
        padding="5px"
        isDisabled={buttonDisabled}
        type="button"
        label="+"
        onClick={() => arrayHelpers.insert(index + 1, { name: '', qty: '', units: '' })}
      />
      {hasMinusButton ? (
        <Button type="button" padding="5px" label="-" onClick={() => arrayHelpers.remove(index)} />
      ) : (
        ''
      )}
    </StyledDiv>
  );
};

export default Ingredient;
