import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';

const IngredientForm: FC = () => {
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.ingredients.map((_, index) => {
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
  );
};

export default IngredientForm;
