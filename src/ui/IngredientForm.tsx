import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import styled from '@emotion/styled';

const StyledFieldArray = styled(FieldArray)`
  background: var(--background);
  border: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  border-radius: 5px;
`;

const IngredientForm = ({ props }) => {
  return (
    <div>
      <StyledFieldArray
        placeholder="Ingredients"
        name="ingredients"
        render={(arrayHelpers) => {
          return props.values.ingredients.map((_, index) => {
            return (
              <Ingredient
                index={index}
                arrayHelpers={arrayHelpers}
                key={`ingredient.${index * 1000}`}
              />
            );
          });
        }}
      />
    </div>
  );
};

export default IngredientForm;
